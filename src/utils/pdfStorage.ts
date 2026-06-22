// IndexedDB helper for storing and retrieving user-uploaded PDF files
const DB_NAME = 'FondazioneAIC_PDF_DB';
const DB_VERSION = 1;
const STORE_NAME = 'pdf_storage';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

export async function storePDF(documentId: string, file: File): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const reader = new FileReader();

    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const request = store.put(arrayBuffer, documentId);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    };

    reader.onerror = () => reject(new Error('Impossibile leggere il file PDF'));
    reader.readAsArrayBuffer(file);
  });
}

export async function getPDF(documentId: string): Promise<Blob | null> {
  const db = await openDB();
  return new Promise((resolve) => {
    try {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(documentId);

      request.onsuccess = () => {
        if (request.result) {
          const blob = new Blob([request.result], { type: 'application/pdf' });
          resolve(blob);
        } else {
          resolve(null);
        }
      };

      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

export async function deletePDF(documentId: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(documentId);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
