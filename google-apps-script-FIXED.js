// ══════════════════════════════════════════════════════════════
//  AMERITRANS — Driver Application → Google Sheets
//  
//  UPUTSTVO:
//  1. Obriši SVE u ovom editoru i zalepi SAMO ovaj kod
//  2. Klikni SAVE (disketa ikona ili Ctrl+S)
//  3. Iz dropdown-a gore izaberi "testSetup" (NE doPost!)
//  4. Klikni ▶ Run
//  5. Dozvoli permisije kad te pita
//  6. Proveri sheet — treba da se pojavi test red
//  7. Deploy → Manage deployments → Edit → New version → Deploy
// ══════════════════════════════════════════════════════════════

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Driver Applications');
    
    if (!sheet) {
      sheet = ss.insertSheet('Driver Applications');
      var headers = [
        'Timestamp', 'Full Name', 'Email', 'Phone', 'Date of Birth', 'SSN',
        'Street Address', 'City', 'State', 'ZIP', 'Position',
        'License Number', 'License Class', 'License State', 'License Expiration',
        'Endorsements', 'Driving Experience', 'Most Recent Employer',
        'Employment Start Date', 'Employment End Date', 'Position Held',
        'Reason for Leaving', 'FMC Safety Regulations', 'Additional Employment',
        'License Suspended/Revoked', 'Substance Convictions', 'Accidents (3 years)',
        'Authorized', 'Printed Name', 'Signature Date'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#0a1628').setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // BULLETPROOF: ako e ne postoji ili nema parameter, nece pasti
    if (!e || !e.parameter) {
      Logger.log('GRESKA: doPost je pozvan bez podataka. Pokreni testSetup umesto doPost.');
      return ContentService.createTextOutput('Pokreni testSetup funkciju, ne doPost direktno.');
    }

    var p = e.parameter;

    var row = [
      p.timestamp       || new Date().toLocaleString(),
      p.fullName        || '',
      p.email           || '',
      p.phone           || '',
      p.dob             || '',
      p.ssn             || '',
      p.address         || '',
      p.city            || '',
      p.state           || '',
      p.zip             || '',
      p.position        || '',
      p.licenseNumber   || '',
      p.licenseClass    || '',
      p.licenseState    || '',
      p.licenseExpiration || '',
      p.endorsements    || '',
      p.drivingExperience || '',
      p.employer        || '',
      p.empStartDate    || '',
      p.empEndDate      || '',
      p.empPosition     || '',
      p.empReason       || '',
      p.fmcRegulations  || '',
      p.additionalEmployment || '',
      p.suspended       || '',
      p.substanceConvictions || '',
      p.accidents       || '',
      p.authorized      || '',
      p.printedName     || '',
      p.signDate        || ''
    ];

    sheet.appendRow(row);
    Logger.log('USPESNO dodato u sheet, red: ' + sheet.getLastRow());
    return ContentService.createTextOutput('OK');

  } catch (error) {
    Logger.log('ERROR: ' + error);
    return ContentService.createTextOutput('Error: ' + error);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Endpoint is running.');
}

// ═══════════════════════════════════════════════
// KLIKNI NA DROPDOWN GORE I IZABERI: testSetup
// PA ONDA KLIKNI ▶ Run
// ═══════════════════════════════════════════════
function testSetup() {
  var fake = {
    parameter: {
      timestamp:       new Date().toLocaleString(),
      fullName:        'TEST - Obrisi Ovaj Red',
      email:           'test@test.com',
      phone:           '(555) 000-0000',
      dob:             '1990-01-01',
      ssn:             'XXX-XX-XXXX',
      address:         '123 Test St',
      city:            'Chicago',
      state:           'Illinois',
      zip:             '60601',
      position:        'Driver Only',
      licenseNumber:   'TEST123',
      licenseClass:    'Class A',
      licenseState:    'Illinois',
      licenseExpiration: '2027-01-01',
      endorsements:    'HazMat',
      drivingExperience: 'Test - 5 years van experience',
      employer:        'Test Company Inc',
      empStartDate:    '2020-01-01',
      empEndDate:      '2024-01-01',
      empPosition:     'OTR Driver',
      empReason:       'Better opportunity',
      fmcRegulations:  'Yes',
      additionalEmployment: '',
      suspended:       'No',
      substanceConvictions: 'No',
      accidents:       'No',
      authorized:      'Yes',
      printedName:     'Test User',
      signDate:        '2025-01-01'
    }
  };

  var result = doPost(fake);
  Logger.log('Rezultat: ' + result.getContent());
  Logger.log('Proveri sheet - treba da vidis novi test red!');
}
