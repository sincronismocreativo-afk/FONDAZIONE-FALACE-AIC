import { 
  BOOKS_CATALOG, 
  ARTWORKS_CATALOG, 
  INVENTIONS_CATALOG, 
  TV_DOC_SHOWS, 
  LUCIO_FALACE_PATENTS,
  PAOLO_FALACE_WORKS,
  FOUNDATION_METADATA 
} from '../data/archiveData.js';
import { SITE_BLUEPRINT } from './siteBlueprint.js';

function escapeHtml(unsafe: string | number | undefined | boolean): string {
  if (unsafe === undefined || unsafe === null) return '';
  const str = String(unsafe);
  return str.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case '\'': return '&#039;';
      default: return c;
    }
  });
}

export function downloadBackupXml() {
  const dateStr = new Date().toLocaleString('it-IT');
  
  let html = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Database Backup Fondazione Falace</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      background-color: #f8fafc;
      margin: 0;
      padding: 40px 20px;
      line-height: 1.5;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: #ffffff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      border: 1px border #e2e8f0;
    }
    .header {
      border-bottom: 3px solid #003b71;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #003b71;
      margin: 0 0 10px 0;
      font-size: 28px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .header p {
      margin: 5px 0;
      color: #64748b;
      font-size: 14px;
    }
    .timestamp {
      background-color: #e0f2fe;
      color: #0369a1;
      padding: 6px 12px;
      border-radius: 6px;
      font-weight: 600;
      display: inline-block;
      font-size: 13px;
      margin-top: 10px;
    }
    h2 {
      color: #0f172a;
      border-left: 5px solid #003b71;
      padding-left: 12px;
      margin-top: 40px;
      margin-bottom: 15px;
      font-size: 20px;
      font-weight: 700;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
      font-size: 13px;
      background: white;
    }
    th {
      background-color: #003b71;
      color: white;
      text-align: left;
      padding: 12px 14px;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.5px;
      border: 1px solid #002d57;
    }
    td {
      padding: 10px 14px;
      border: 1px solid #e2e8f0;
      vertical-align: top;
    }
    tr:nth-child(even) td {
      background-color: #f8fafc;
    }
    tr:hover td {
      background-color: #f1f5f9;
    }
    .as-badge {
      font-family: monospace;
      background-color: #f1f5f9;
      color: #0f172a;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 12px;
      border: 1px solid #cbd5e1;
    }
    .meta-key {
      font-weight: 600;
      color: #0f172a;
      width: 30%;
      background-color: #f8fafc;
    }
    .footer {
      margin-top: 50px;
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      font-size: 12px;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Database Fondazione Falace - Backup Completo</h1>
      <p>Esportazione scientifica del patrimonio intellettuale, monografie SBN, brevetti UIBM e opere d'arte del Dott. Luca Falace.</p>
      <div class="timestamp">Generato il: ${dateStr}</div>
    </div>

    <h2>1. Registro e Certificazione Fondazione</h2>
    <table>
      <thead>
        <tr>
          <th>Chiave di Registro</th>
          <th>Valore / Certificazione Stato</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="meta-key">Denominazione IT</td>
          <td>${escapeHtml(FOUNDATION_METADATA.denomination_it)}</td>
        </tr>
        <tr>
          <td class="meta-key">Denominazione EN</td>
          <td>${escapeHtml(FOUNDATION_METADATA.denomination_en)}</td>
        </tr>
        <tr>
          <td class="meta-key">Fondatore</td>
          <td>${escapeHtml(FOUNDATION_METADATA.founder)}</td>
        </tr>
        <tr>
          <td class="meta-key">Email di Contatto</td>
          <td>${escapeHtml(FOUNDATION_METADATA.email)}</td>
        </tr>
        <tr>
          <td class="meta-key">Codice ATECO</td>
          <td><span class="as-badge">${escapeHtml(FOUNDATION_METADATA.ateco_code)}</span></td>
        </tr>
        <tr>
          <td class="meta-key">Descrizione ATECO</td>
          <td>${escapeHtml(FOUNDATION_METADATA.ateco_desc_it)}</td>
        </tr>
        <tr>
          <td class="meta-key">MiC / MiBAC Diritto Autore</td>
          <td>${escapeHtml(FOUNDATION_METADATA.legal_backing.mic_mibac)}</td>
        </tr>
        <tr>
          <td class="meta-key">UIBM Brevetti di Invenzione</td>
          <td>${escapeHtml(FOUNDATION_METADATA.legal_backing.uibm)}</td>
        </tr>
        <tr>
          <td class="meta-key">OPAC SBN Catalogo</td>
          <td>${escapeHtml(FOUNDATION_METADATA.legal_backing.opac_sbn)}</td>
        </tr>
        <tr>
          <td class="meta-key">CERN Zenodo DOI</td>
          <td>${escapeHtml(FOUNDATION_METADATA.legal_backing.zenodo_cern_doi)}</td>
        </tr>
        <tr>
          <td class="meta-key">Discoteca di Stato Audio</td>
          <td>${escapeHtml(FOUNDATION_METADATA.legal_backing.dds_discoteca)}</td>
        </tr>
        <tr>
          <td class="meta-key">Museo MAXXI Catalogo</td>
          <td>${escapeHtml(FOUNDATION_METADATA.legal_backing.museo_maxxi)}</td>
        </tr>
      </tbody>
    </table>

    <h2>2. Libri e Monografie - Biblioteca SBN</h2>
    <table>
      <thead>
        <tr>
          <th>ID Volume</th>
          <th>Titolo</th>
          <th>Anno</th>
          <th>Editore</th>
          <th>ASIN Amazon</th>
          <th>ISBN</th>
          <th>Codice SBN OPAC</th>
          <th>Tipo</th>
          <th>Descrizione dell'Opera</th>
        </tr>
      </thead>
      <tbody>
  `;

  BOOKS_CATALOG.forEach(book => {
    let asinStr = book.asin || '';
    if (!asinStr) {
      const match = book.description.match(/ASIN:?\s*([A-Z0-9]{10})/i);
      if (match && match[1]) asinStr = match[1];
    }
    html += `        <tr>
          <td><span class="as-badge">${escapeHtml(book.id)}</span></td>
          <td style="font-weight: 600;">${escapeHtml(book.title)}</td>
          <td>${book.year}</td>
          <td>${escapeHtml(book.publisher)}</td>
          <td>${asinStr ? `<span class="as-badge">${escapeHtml(asinStr)}</span>` : '-'}</td>
          <td>${book.isbn ? escapeHtml(book.isbn) : '-'}</td>
          <td>${book.sbnCode ? `<span class="as-badge">${escapeHtml(book.sbnCode)}</span>` : '-'}</td>
          <td>${escapeHtml(book.type)}</td>
          <td style="color: #475569; font-size: 12px;">${escapeHtml(book.description)}</td>
        </tr>\n`;
  });

  html += `      </tbody>
    </table>

    <h2>3. Archivio Brevetti dell'Ingegno e Invenzioni UIBM</h2>
    <table>
      <thead>
        <tr>
          <th>N. Brevetto</th>
          <th>Titolo dell'Invenzione</th>
          <th>Anno Deposito</th>
          <th>Codice Deposito</th>
          <th>Stato Brevetto</th>
          <th>Dettagli e Descrizione</th>
        </tr>
      </thead>
      <tbody>
  `;

  INVENTIONS_CATALOG.forEach(inv => {
    html += `        <tr>
          <td>${inv.number}</td>
          <td style="font-weight: 600;">${escapeHtml(inv.title)}</td>
          <td>${inv.year}</td>
          <td><span class="as-badge">${escapeHtml(inv.patentNum || '')}</span></td>
          <td>${escapeHtml(inv.status)}</td>
          <td style="color: #475569; font-size: 12px;">${escapeHtml(inv.description)} - ${escapeHtml(inv.details)}</td>
        </tr>\n`;
  });

  html += `      </tbody>
    </table>

    <h2>4. Catalogo Opere d'Arte Contemporanea MAXXI Siae</h2>
    <table>
      <thead>
        <tr>
          <th>Codice Opera</th>
          <th>Titolo dell'Opera</th>
          <th>Anno</th>
          <th>Categoria</th>
          <th>Sede / Locazione</th>
          <th>Descrizione</th>
        </tr>
      </thead>
      <tbody>
  `;

  ARTWORKS_CATALOG.forEach(art => {
    html += `        <tr>
          <td><span class="as-badge">${escapeHtml(art.id)}</span></td>
          <td style="font-weight: 600;">${escapeHtml(art.title)}</td>
          <td>${art.year}</td>
          <td>${escapeHtml(art.category)}</td>
          <td>${escapeHtml(art.venue)}</td>
          <td style="color: #475569; font-size: 12px;">${escapeHtml(art.description)}</td>
        </tr>\n`;
  });

  html += `      </tbody>
    </table>

    <h2>5. Archivio Serie TV, Documentari ed Episodi</h2>
    <table>
      <thead>
        <tr>
          <th>N. Episodio</th>
          <th>Titolo Documentario</th>
          <th>Anno</th>
          <th>Tematiche / Topics</th>
          <th>Descrizione</th>
        </tr>
      </thead>
      <tbody>
  `;

  TV_DOC_SHOWS.forEach(ep => {
    html += `        <tr>
          <td>${ep.num}</td>
          <td style="font-weight: 600;">${escapeHtml(ep.title)}</td>
          <td>${ep.year}</td>
          <td>${escapeHtml(ep.topics)}</td>
          <td style="color: #475569; font-size: 12px;">${escapeHtml(ep.description)}</td>
        </tr>\n`;
  });

  html += `      </tbody>
    </table>

    <h2>6. Archivio Onorifico Storico di Famiglia</h2>
    <table>
      <thead>
        <tr>
          <th>Soggetto Archivio</th>
          <th>Titolo Opera / Brevetto</th>
          <th>Anno / Periodo</th>
          <th>Note / Certificazione di Paternità</th>
        </tr>
      </thead>
      <tbody>
  `;

  LUCIO_FALACE_PATENTS.forEach(pat => {
    html += `        <tr>
          <td style="font-weight: 600; color: #0369a1;">Brevetto Lucio Falace (Padre)</td>
          <td style="font-weight: 600;">${escapeHtml(pat.title)}</td>
          <td>${pat.year}</td>
          <td><span class="as-badge">${escapeHtml(pat.code)}</span> (${escapeHtml(pat.office)})</td>
        </tr>\n`;
  });

  PAOLO_FALACE_WORKS.forEach(w => {
    html += `        <tr>
          <td style="font-weight: 600; color: #b45309;">Opera Paolo Falace (Fratello)</td>
          <td style="font-weight: 600;">${escapeHtml(w.title)}</td>
          <td>${escapeHtml(w.year)}</td>
          <td>${escapeHtml(w.type)} - ${escapeHtml(w.details)}</td>
        </tr>\n`;
  });

  html += `      </tbody>
    </table>

    <div class="footer">
      <p>Fondazione Falace per le Monografie Scientifiche e l'Ingegno Creativo &copy; ${new Date().getFullYear()}</p>
      <p>CERN Zenodo Partner • OPAC SBN National Library Partner</p>
    </div>
  </div>
</body>
</html>`;

  // Create real blob representing HTML and initiate direct file download
  const blob = new Blob([html], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'database_fondazione_falace_backup.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadSiteBlueprint() {
  try {
    const jsonString = JSON.stringify(SITE_BLUEPRINT, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fondazione_falace_site_blueprint_archive.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Failed to download site blueprint:", err);
    alert("Errore durante la generazione del pacchetto di clonazione.");
  }
}

export function downloadSiteBlueprintTxt() {
  try {
    let txt = `================================================================================
FONDATION FALACE PORTAL - COMPREHENSIVE REPLICATION BLUEPRINT
Exported on: ${new Date().toISOString()}
Instructions for AI (Gemini / Claude / GPT):
This is a standard flat-file plain text archive containing all code, files, configurations, 
and contents needed to clone, replicate, or study this entire web application perfectly.
Upload this file or paste its content to recreate the site.
Each file is presented inside clear headers below.
================================================================================\n\n`;

    Object.entries(SITE_BLUEPRINT.files).forEach(([filePath, content]) => {
      txt += `\n################################################################################\n`;
      txt += `### FILE: ${filePath}\n`;
      txt += `################################################################################\n\n`;
      txt += `${content}\n`;
    });

    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fondazione_falace_site_blueprint_archive.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Failed to download text blueprint:", err);
    alert("Errore durante la generazione del pacchetto di clonazione in formato testo.");
  }
}

export function downloadBackupXmlReal() {
  const escapeXml = (unsafe: string | number | undefined | boolean): string => {
    if (unsafe === undefined || unsafe === null) return '';
    const str = String(unsafe);
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<fondazione_falace_database>\n`;
  xml += `  <exported_at>${new Date().toISOString()}</exported_at>\n\n`;

  // 1. Metadata
  xml += `  <metadata>\n`;
  xml += `    <denomination_it>${escapeXml(FOUNDATION_METADATA.denomination_it)}</denomination_it>\n`;
  xml += `    <denomination_en>${escapeXml(FOUNDATION_METADATA.denomination_en)}</denomination_en>\n`;
  xml += `    <founder>${escapeXml(FOUNDATION_METADATA.founder)}</founder>\n`;
  xml += `    <email>${escapeXml(FOUNDATION_METADATA.email)}</email>\n`;
  xml += `    <ateco_code>${escapeXml(FOUNDATION_METADATA.ateco_code)}</ateco_code>\n`;
  xml += `    <ateco_desc_it>${escapeXml(FOUNDATION_METADATA.ateco_desc_it)}</ateco_desc_it>\n`;
  xml += `    <legal_backing>\n`;
  xml += `      <mic_mibac>${escapeXml(FOUNDATION_METADATA.legal_backing.mic_mibac)}</mic_mibac>\n`;
  xml += `      <uibm>${escapeXml(FOUNDATION_METADATA.legal_backing.uibm)}</uibm>\n`;
  xml += `      <opac_sbn>${escapeXml(FOUNDATION_METADATA.legal_backing.opac_sbn)}</opac_sbn>\n`;
  xml += `      <zenodo_cern_doi>${escapeXml(FOUNDATION_METADATA.legal_backing.zenodo_cern_doi)}</zenodo_cern_doi>\n`;
  xml += `      <dds_discoteca>${escapeXml(FOUNDATION_METADATA.legal_backing.dds_discoteca)}</dds_discoteca>\n`;
  xml += `      <museo_maxxi>${escapeXml(FOUNDATION_METADATA.legal_backing.museo_maxxi)}</museo_maxxi>\n`;
  xml += `    </legal_backing>\n`;
  xml += `  </metadata>\n\n`;

  // 2. Books
  xml += `  <libri_monografie>\n`;
  BOOKS_CATALOG.forEach(book => {
    xml += `    <libro id="${escapeXml(book.id)}">\n`;
    xml += `      <titolo>${escapeXml(book.title)}</titolo>\n`;
    xml += `      <anno>${book.year}</anno>\n`;
    xml += `      <editore>${escapeXml(book.publisher)}</editore>\n`;
    xml += `      <isbn>${book.isbn ? escapeXml(book.isbn) : ''}</isbn>\n`;
    xml += `      <sbn_code>${book.sbnCode ? escapeXml(book.sbnCode) : ''}</sbn_code>\n`;
    xml += `      <tipo>${escapeXml(book.type)}</tipo>\n`;
    xml += `      <descrizione>${escapeXml(book.description)}</descrizione>\n`;
    xml += `    </libro>\n`;
  });
  xml += `  </libri_monografie>\n\n`;

  // 3. Inventions
  xml += `  <brevetti_uibm>\n`;
  INVENTIONS_CATALOG.forEach(inv => {
    xml += `    <brevetto numero="${escapeXml(inv.number)}">\n`;
    xml += `      <titolo>${escapeXml(inv.title)}</titolo>\n`;
    xml += `      <anno>${inv.year}</anno>\n`;
    xml += `      <deposito_codice>${escapeXml(inv.patentNum || '')}</deposito_codice>\n`;
    xml += `      <stato>${escapeXml(inv.status)}</stato>\n`;
    xml += `      <descrizione>${escapeXml(inv.description)}</descrizione>\n`;
    xml += `      <dettagli>${escapeXml(inv.details)}</dettagli>\n`;
    xml += `    </brevetto>\n`;
  });
  xml += `  </brevetti_uibm>\n\n`;

  // 4. Artworks
  xml += `  <opere_arte_siae>\n`;
  ARTWORKS_CATALOG.forEach(art => {
    xml += `    <opera id="${escapeXml(art.id)}">\n`;
    xml += `      <titolo>${escapeXml(art.title)}</titolo>\n`;
    xml += `      <anno>${art.year}</anno>\n`;
    xml += `      <categoria>${escapeXml(art.category)}</categoria>\n`;
    xml += `      <collocazione>${escapeXml(art.venue)}</collocazione>\n`;
    xml += `      <descrizione>${escapeXml(art.description)}</descrizione>\n`;
    xml += `    </opera>\n`;
  });
  xml += `  </opere_arte_siae>\n\n`;

  // 5. TV & Documentaries
  xml += `  <documentari_video>\n`;
  TV_DOC_SHOWS.forEach(ep => {
    xml += `    <documentario numero="${ep.num}">\n`;
    xml += `      <titolo>${escapeXml(ep.title)}</titolo>\n`;
    xml += `      <anno>${ep.year}</anno>\n`;
    xml += `      <tematiche>${escapeXml(ep.topics)}</tematiche>\n`;
    xml += `      <descrizione>${escapeXml(ep.description)}</descrizione>\n`;
    xml += `    </documentario>\n`;
  });
  xml += `  </documentari_video>\n\n`;

  // 6. Family heritage
  xml += `  <archivio_famiglia>\n`;
  LUCIO_FALACE_PATENTS.forEach(pat => {
    xml += `    <brevetto_lucio_padre>\n`;
    xml += `      <titolo>${escapeXml(pat.title)}</titolo>\n`;
    xml += `      <anno>${pat.year}</anno>\n`;
    xml += `      <codice>${escapeXml(pat.code)}</codice>\n`;
    xml += `      <ufficio>${escapeXml(pat.office)}</ufficio>\n`;
    xml += `    </brevetto_lucio_padre>\n`;
  });
  PAOLO_FALACE_WORKS.forEach(w => {
    xml += `    <opera_paolo_fratello>\n`;
    xml += `      <titolo>${escapeXml(w.title)}</titolo>\n`;
    xml += `      <anno>${escapeXml(w.year)}</anno>\n`;
    xml += `      <tipo>${escapeXml(w.type)}</tipo>\n`;
    xml += `      <dettagli>${escapeXml(w.details)}</dettagli>\n`;
    xml += `    </opera_paolo_fratello>\n`;
  });
  xml += `  </archivio_famiglia>\n`;

  xml += `</fondazione_falace_database>\n`;

  const blob = new Blob([xml], { type: 'application/xml;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'database_fondazione_falace_backup.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
