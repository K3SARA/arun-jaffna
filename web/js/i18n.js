// i18n.js - Complete Tamil & English Localization System for Mageshvani Vetrilai

(function () {
  const STORAGE_KEY = 'mageshvani_lang';

  const translations = {
    ta: {
      appName: 'மகேஸ்வானி வெற்றிலை',
      appNameEn: 'Mageshvani Vetrilai',
      appSubtitle: 'பருத்தித்துறை வீதி, நெல்லியடி',
      appSubtitleEn: 'Point Pedro Road, Nelliady',
      appPhone: '076 10 30000 / 076 63 00004',
      appReg: 'மகேஸ்வானி வெற்றிலை வியாபாரம்',

      // Login
      loginTitle: 'உள்நுழைவு / அமைப்பு',
      username: 'பயனர்பெயர்',
      password: 'கடவுச்சொல்',
      usernamePlaceholder: 'பயனர்பெயரை உள்ளிடவும்',
      passwordPlaceholder: 'கடவுச்சொல்லை உள்ளிடவும்',
      btnLogin: 'தொடரவும்',
      btnResetLogin: 'கடவுச்சொல் மறந்துவிட்டதா? / உள்நுழைவை மீட்டமைக்கவும்',

      // Header & Navigation
      backup: 'காப்புப்பிரதி',
      backupNow: 'இப்போதே எடுக்கவும்',
      backupReminderTitle: 'காப்புப்பிரதி பரிந்துரைக்கப்படுகிறது',
      backupReminderText: 'உங்கள் தரவைப் பாதுகாக்க காப்புப்பிரதி எடுக்கவும்.',
      logout: 'வெளியேறு',
      navBilling: 'பில்லிங்',
      navInventory: 'சரக்கு இருப்பு',
      navCustomers: 'வாடிக்கையாளர்கள்',
      navCollection: 'வசூல்',
      navExpenses: 'செலவுகள்',
      navReports: 'அறிக்கைகள்',
      navHistory: 'வரலாறு',
      darkMode: 'இருண்ட பயன்முறை',
      lightMode: 'வெளிச்ச பயன்முறை',
      langToggleText: 'English-க்கு மாறவும்',
      currentLangLabel: 'தமிழ்',

      // Billing Page
      customerName: 'வாடிக்கையாளர் பெயர்',
      customerNamePlaceholder: 'நேரடி வாடிக்கையாளர்',
      phoneOptional: 'தொலைபேசி எண் (விருப்பத்தேர்வு)',
      phonePlaceholder: '07XXXXXXXX',
      addressOptional: 'வாடிக்கையாளர் முகவரி (விருப்பத்தேர்வு)',
      addressPlaceholder: 'முகவரியை உள்ளிடவும்',
      itemName: 'பொருளின் பெயர்',
      itemNamePlaceholder: 'பொருளின் பெயர்',
      quantity: 'அளவு',
      unit: 'அலகு',
      rate: 'விலை (அலகுக்கு)',
      pricePlaceholder: 'விலை',
      btnAddItem: '+ மற்றொரு பொருள் சேர்க்க',
      subtotal: 'துணை மொத்தம்',
      total: 'மொத்தம்',
      paymentMethod: 'கட்டண முறை',
      cash: 'பணம் (Cash)',
      card: 'அட்டை (Card)',
      bankTransfer: 'வங்கி பரிமாற்றம் (Bank)',
      cheque: 'காசோலை (Cheque)',
      credit: 'கடன் (Credit)',
      chequeAmount: 'காசோலை தொகை',
      chequeDate: 'காசோலை தேதி',
      chequeNumber: 'காசோலை எண்',
      chequeNumberPlaceholder: 'காசோலை எண்ணை உள்ளிடவும்',
      bankName: 'வங்கி',
      bankNamePlaceholder: 'வங்கியின் பெயரை உள்ளிடவும்',
      receivedAmount: 'பெற்ற தொகை',
      btnAddPaymentMethod: '+ கட்டண முறை சேர்க்க',
      useSinglePayment: 'ஒற்றை கட்டண முறை',
      balance: 'மீதி / நிலுவை',
      change: 'சில்லறை',
      btnGenerateBill: 'பில் உருவாக்கு & பகிர்க',
      btnCancelEdit: 'பில் திருத்துவதை ரத்து செய்',
      stockHint: 'இருப்பு',
      outOfStock: 'இருப்பு இல்லை!',
      lowStock: 'குறைந்த இருப்பு',

      // Units
      unitPcs: 'எண்ணிக்கை (Pcs)',
      unitKg: 'கிலோ (Kg)',
      unitG: 'கிராம் (g)',
      unitLtr: 'லீட்டர் (Ltr)',
      unitPack: 'பாக்கெட் (Pack)',
      unitBox: 'பெட்டி (Box)',

      // History Page
      billHistory: 'பில் வரலாறு',
      searchCustomer: 'வாடிக்கையாளரைத் தேடு',
      searchCustomerPlaceholder: 'வாடிக்கையாளர் பெயரை உள்ளிடவும்',
      from: 'முதல்',
      to: 'வரை',
      exportBackup: 'காப்புப்பிரதி ஏற்றுமதி',
      importBackup: 'காப்புப்பிரதி இறக்குமதி',
      rollbackImport: 'மீட்டமைக்கவும்',
      statusPaid: 'செலுத்தப்பட்டது',
      statusPartial: 'பகுதித் தொகை',
      statusCredit: 'கடன்',
      statusCancelled: 'ரத்து செய்யப்பட்டது',

      // Customers Page
      customers: 'வாடிக்கையாளர்கள்',
      btnAddNewCustomer: 'புதிய வாடிக்கையாளர் சேர்க்க',
      importCustomers: 'வாடிக்கையாளர்களை இறக்குமதி',
      customerCsvHint: 'CSV: name, phone, address',
      receiptLanguage: 'ரசீது மொழி',
      editCustomer: 'வாடிக்கையாளரைத் திருத்து',
      name: 'பெயர்',
      phone: 'தொலைபேசி',
      address: 'முகவரி',
      mapLocation: 'வரைபட இடம்',
      noLocationSaved: 'இடம் எதுவும் சேமிக்கப்படவில்லை',
      saveCurrentLocation: 'தற்போதைய இடத்தைச் சேமி',
      setOnMap: 'வரைபடத்தில் குறிக்கவும்',
      viewMap: 'வரைபடம் பார்க்க',
      btnSaveCustomerEdit: 'மாற்றங்களைச் சேமிக்கவும்',
      cancel: 'ரத்து செய்',
      clear: 'தெளிவுபடுத்து',

      // Collection Page
      collection: 'வசூல்',
      collectionAuditTrail: 'வசூல் தணிக்கைப் பதிவு',
      collectPayment: 'பணம் வசூலிக்க',
      amountToCollect: 'வசூலிக்க வேண்டிய தொகை',

      // Expenses Page
      expenses: 'செலவுகள்',
      expenseName: 'செலவு பெயர்',
      expenseNamePlaceholder: 'எ.கா. போக்குவரத்து, பொதி செய்தல், சம்பளம்',
      amount: 'தொகை',
      category: 'வகை',
      date: 'தேதி',
      noteOptional: 'குறிப்பு (விருப்பத்தேர்வு)',
      shortNotePlaceholder: 'சிறு குறிப்பு',
      btnAddExpense: 'செலவைச் சேர்க்கவும்',
      btnCancelExpenseEdit: 'திருத்துவதை ரத்து செய்',
      filterByDate: 'தேதி வாரியாக வடிகட்டவும்',
      recentExpenses: 'சமீபத்திய செலவுகள்',
      print: 'அச்சிடு',
      catTransport: 'போக்குவரத்து (Transport)',
      catSalary: 'சம்பளம் (Salary)',
      catPacking: 'பொதி செய்தல் (Packing)',
      catRent: 'வாடகை (Rent)',
      catUtility: 'பயன்பாடுகள் (Utility)',
      catOther: 'மற்றவை (Other)',

      // Reports Page
      reports: 'அறிக்கைகள்',
      reportType: 'அறிக்கை',
      period: 'காலம்',
      repSales: 'விற்பனை சுருக்கம் (Sales Summary)',
      repProfit: 'நிகர லாபம் (Net Profit)',
      repReceivables: 'நிலுவைத் தொகை (Outstanding)',
      repCollections: 'வசூல் அறிக்கை (Collections)',
      repProducts: 'அதிக விற்பனையான பொருட்கள் (Top Products)',
      repStock: 'சரக்கு இருப்பு மதிப்பு (Stock Valuation)',
      repPayments: 'கட்டண முறைகள் (Payment Methods)',
      repCheques: 'காசோலை விவரங்கள் (Cheque Details)',
      repExpenses: 'செலவு சுருக்கம் (Expense Summary)',
      repDayClose: 'நாள் முடிவு அறிக்கை (Day Close)',
      repLowStock: 'குறைந்த இருப்பு எச்சரிக்கை (Low Stock)',
      repAuditLog: 'தணிக்கைப் பதிவு (Audit Log)',
      repCustomers: 'வாடிக்கையாளர் சுருக்கம் (Customer Summary)',
      repDataAudit: 'தரவு தணிக்கை (Data Audit)',

      periodToday: 'இன்று (Today)',
      periodThisMonth: 'இந்த மாதம் (This Month)',
      periodAll: 'அனைத்து காலம் (All Time)',
      periodCustom: 'குறிப்பிட்ட காலம் (Custom Range)',

      quickNotes: 'விரைவுக் குறிப்புகள்',
      quickNotesPlaceholder: 'இங்கு குறிப்புகளை எழுதவும்...',
      notSavedYet: 'இன்னும் சேமிக்கப்படவில்லை',
      saveNote: 'குறிப்பைச் சேமி',

      // Inventory Page
      inventory: 'சரக்கு இருப்பு',
      btnInventoryEdit: 'திருத்து',
      selectExistingProduct: 'இருக்கும் பொருளைத் தேர்ந்தெடுக்கவும்',
      chooseProductOption: 'புதிய பொருள் அல்லது ஏற்கனவே உள்ளதைத் தேர்ந்தெடுக்கவும்',
      addNewProduct: 'புதிய பொருள் சேர்க்க',
      productName: 'பொருளின் பெயர்',
      productNamePlaceholder: 'பொருளின் பெயர்',
      initialStock: 'ஆரம்ப இருப்பு (அளவு)',
      sellingPrice: 'விற்பனை விலை',
      purchasePrice: 'கொள்முதல் விலை',
      reorderLevel: 'மறுவரிசை எச்சரிக்கை அளவு',
      changeReason: 'மாற்றக் காரணம்',
      changeReasonPlaceholder: 'மாற்றங்களைச் சேமிக்கும் போது காரணம் தேவை',
      currentStock: 'தற்போதைய இருப்பு',
      btnDownloadPdf: 'PDF பதிவிறக்கு',
      archivedProducts: 'காப்பகப்படுத்தப்பட்ட பொருட்கள்',
      btnSaveInventory: 'மாற்றங்களைச் சேமிக்கவும்',

      // Modals & Receipts
      billCreated: 'பில் உருவாக்கப்பட்டது',
      btnPrintReceipt: 'ரசீது அச்சிடு (80mm)',
      btnShareWhatsApp: 'வாட்ஸ்அப் மூலம் பகிர்',
      btnSendSMS: 'எஸ்எம்எஸ் அனுப்பு',
      btnCopyBillText: 'பில் உரையை நகலெடு',
      btnDone: 'முடிந்தது',
      receiptTitle: 'ரசீது',
      receiptBillNo: 'பில் எண்',
      receiptDate: 'தேதி',
      receiptCustomer: 'வாடிக்கையாளர்',
      receiptPhone: 'தொலைபேசி',
      receiptItem: 'விபரம் / பொருள்',
      receiptQty: 'அளவு',
      receiptRate: 'விலை',
      receiptAmount: 'தொகை',
      receiptSubtotal: 'துணை மொத்தம்',
      receiptTotal: 'மொத்தம்',
      receiptPaid: 'செலுத்தியது',
      receiptBalance: 'மீதி நிலுவை',
      receiptChange: 'சில்லறை',
      receiptThankYou: 'தங்களின் வருகைக்கு நன்றி! மீண்டும் வருக!',
      receiptTerms: 'நிபந்தனைகள் மற்றும் விதிமுறைகள்',
      receiptTermsText: 'வாங்கிய பொருட்கள் மாற்றப்பட மாட்டாது. பற்றுச்சீட்டை பத்திரமாக வைத்திருக்கவும்.'
    },

    en: {
      appName: 'Mageshvani Vetrilai',
      appNameEn: 'Mageshvani Vetrilai',
      appSubtitle: 'Point Pedro Road, Nelliady',
      appSubtitleEn: 'Point Pedro Road, Nelliady',
      appPhone: '076 10 30000 / 076 63 00004',
      appReg: 'Mageshvani Vetrilai Traders',

      // Login
      loginTitle: 'Welcome Setup',
      username: 'Username',
      password: 'Password',
      usernamePlaceholder: 'Enter username',
      passwordPlaceholder: 'Enter password',
      btnLogin: 'Continue',
      btnResetLogin: 'Forgot Password / Reset Login',

      // Header & Navigation
      backup: 'Backup',
      backupNow: 'Backup Now',
      backupReminderTitle: 'Backup recommended',
      backupReminderText: 'Create a backup to protect your data.',
      logout: 'Logout',
      navBilling: 'Billing',
      navInventory: 'Inventory',
      navCustomers: 'Customers',
      navCollection: 'Collection',
      navExpenses: 'Expenses',
      navReports: 'Reports',
      navHistory: 'History',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      langToggleText: 'தமிழுக்கு மாறவும்',
      currentLangLabel: 'English',

      // Billing Page
      customerName: 'Customer Name',
      customerNamePlaceholder: 'Walk-in Customer',
      phoneOptional: 'Phone Number (Optional)',
      phonePlaceholder: '07XXXXXXXX',
      addressOptional: 'Customer Address (Optional)',
      addressPlaceholder: 'Enter address',
      itemName: 'Item Name',
      itemNamePlaceholder: 'Product Name',
      quantity: 'Quantity',
      unit: 'Unit',
      rate: 'Rate (price/unit)',
      pricePlaceholder: 'Price',
      btnAddItem: '+ Add Another Product',
      subtotal: 'Subtotal',
      total: 'Total',
      paymentMethod: 'Payment Method',
      cash: 'Cash',
      card: 'Card',
      bankTransfer: 'Bank Transfer',
      cheque: 'Cheque',
      credit: 'Credit',
      chequeAmount: 'Cheque Amount',
      chequeDate: 'Cheque Date',
      chequeNumber: 'Cheque Number',
      chequeNumberPlaceholder: 'Enter cheque number',
      bankName: 'Bank',
      bankNamePlaceholder: 'Enter bank name',
      receivedAmount: 'Received Amount',
      btnAddPaymentMethod: '+ Add Payment Method',
      useSinglePayment: 'Use Single Payment',
      balance: 'Balance',
      change: 'Change',
      btnGenerateBill: 'Generate & Share Bill',
      btnCancelEdit: 'Cancel Editing Bill',
      stockHint: 'Stock',
      outOfStock: 'Out of stock!',
      lowStock: 'Low stock',

      // Units
      unitPcs: 'Pcs',
      unitKg: 'Kg',
      unitG: 'g',
      unitLtr: 'Ltr',
      unitPack: 'Pack',
      unitBox: 'Box',

      // History Page
      billHistory: 'Bill History',
      searchCustomer: 'Search Customer',
      searchCustomerPlaceholder: 'Type customer name',
      from: 'From',
      to: 'To',
      exportBackup: 'Export Backup',
      importBackup: 'Import Backup',
      rollbackImport: 'Rollback Import',
      statusPaid: 'Paid',
      statusPartial: 'Partial',
      statusCredit: 'Credit',
      statusCancelled: 'Cancelled',

      // Customers Page
      customers: 'Customers',
      btnAddNewCustomer: 'Add New Customer',
      importCustomers: 'Import Customers',
      customerCsvHint: 'CSV columns: name, phone, address',
      receiptLanguage: 'Receipt language',
      editCustomer: 'Edit Customer',
      name: 'Name',
      phone: 'Phone',
      address: 'Address',
      mapLocation: 'Map Location',
      noLocationSaved: 'No location saved',
      saveCurrentLocation: 'Save Current Location',
      setOnMap: 'Set on Map',
      viewMap: 'View Map',
      btnSaveCustomerEdit: 'Save Changes',
      cancel: 'Cancel',
      clear: 'Clear',

      // Collection Page
      collection: 'Collection',
      collectionAuditTrail: 'Collection Audit Trail',
      collectPayment: 'Collect Payment',
      amountToCollect: 'Amount to Collect',

      // Expenses Page
      expenses: 'Expenses',
      expenseName: 'Expense Name',
      expenseNamePlaceholder: 'e.g. Transport, packing, salary',
      amount: 'Amount',
      category: 'Category',
      date: 'Date',
      noteOptional: 'Note (Optional)',
      shortNotePlaceholder: 'Short note',
      btnAddExpense: 'Add Expense',
      btnCancelExpenseEdit: 'Cancel Edit',
      filterByDate: 'Filter by Date',
      recentExpenses: 'Recent Expenses',
      print: 'Print',
      catTransport: 'Transport',
      catSalary: 'Salary',
      catPacking: 'Packing',
      catRent: 'Rent',
      catUtility: 'Utility',
      catOther: 'Other',

      // Reports Page
      reports: 'Reports',
      reportType: 'Report',
      period: 'Period',
      repSales: 'Sales Summary',
      repProfit: 'Net Profit',
      repReceivables: 'Outstanding',
      repCollections: 'Collections',
      repProducts: 'Top Products',
      repStock: 'Stock Valuation',
      repPayments: 'Payment Methods',
      repCheques: 'Cheque Details',
      repExpenses: 'Expense Summary',
      repDayClose: 'Day Close',
      repLowStock: 'Low Stock',
      repAuditLog: 'Audit Log',
      repCustomers: 'Customer Summary',
      repDataAudit: 'Data Audit',

      periodToday: 'Today',
      periodThisMonth: 'This Month',
      periodAll: 'All Time',
      periodCustom: 'Custom Range',

      quickNotes: 'Quick Notes',
      quickNotesPlaceholder: 'Write short notes here...',
      notSavedYet: 'Not saved yet',
      saveNote: 'Save Note',

      // Inventory Page
      inventory: 'Inventory',
      btnInventoryEdit: 'Edit',
      selectExistingProduct: 'Select Existing Product',
      chooseProductOption: 'New product or choose existing',
      addNewProduct: 'Add New Product',
      productName: 'Product Name',
      productNamePlaceholder: 'Product Name',
      initialStock: 'Initial Stock (Qty)',
      sellingPrice: 'Selling Price',
      purchasePrice: 'Purchase Price',
      reorderLevel: 'Reorder Level',
      changeReason: 'Change Reason',
      changeReasonPlaceholder: 'Required when saving inventory changes',
      currentStock: 'Current Stock',
      btnDownloadPdf: 'Download PDF',
      archivedProducts: 'Archived Products',
      btnSaveInventory: 'Save Changes',

      // Modals & Receipts
      billCreated: 'Bill Created',
      btnPrintReceipt: 'Print Receipt (80mm)',
      btnShareWhatsApp: 'Share via WhatsApp',
      btnSendSMS: 'Send SMS',
      btnCopyBillText: 'Copy Bill Text',
      btnDone: 'Done',
      receiptTitle: 'Receipt',
      receiptBillNo: 'Bill No',
      receiptDate: 'Date',
      receiptCustomer: 'Customer',
      receiptPhone: 'Phone',
      receiptItem: 'Item',
      receiptQty: 'Qty',
      receiptRate: 'Rate',
      receiptAmount: 'Amount',
      receiptSubtotal: 'Subtotal',
      receiptTotal: 'Total',
      receiptPaid: 'Paid',
      receiptBalance: 'Balance Due',
      receiptChange: 'Change',
      receiptThankYou: 'Thank you for your business! Please visit again!',
      receiptTerms: 'Terms & Conditions',
      receiptTermsText: 'Goods once sold will not be returned. Please keep the receipt.'
    }
  };

  // Pre-seeded products map with both Tamil and English names
  const PRODUCT_DICTIONARY = [
    { en: 'Betel leaf', ta: 'வெற்றிலை', unit: 'pcs', stock: 100, price: 10, cost: 7, reorder: 20 },
    { en: 'Tobacco', ta: 'புகையிலை', unit: 'pcs', stock: 50, price: 50, cost: 40, reorder: 10 },
    { en: 'Cigarettes', ta: 'சிகரெட்', unit: 'pcs', stock: 100, price: 150, cost: 130, reorder: 20 },
    { en: 'Beedi', ta: 'பீடி', unit: 'pack', stock: 100, price: 25, cost: 20, reorder: 25 },
    { en: 'Buwak', ta: 'பூவாக்', unit: 'pcs', stock: 100, price: 15, cost: 10, reorder: 20 },
    { en: 'Soda', ta: 'சோடா', unit: 'pcs', stock: 50, price: 100, cost: 80, reorder: 10 },
    { en: 'Pepsi', ta: 'பெப்சி', unit: 'pcs', stock: 50, price: 120, cost: 100, reorder: 10 },
    { en: 'Coca-cola', ta: 'கோகோ கோலா', unit: 'pcs', stock: 50, price: 120, cost: 100, reorder: 10 },
    { en: 'Sprite', ta: 'ஸ்ப்ரைட்', unit: 'pcs', stock: 50, price: 120, cost: 100, reorder: 10 },
    { en: 'Mirinda', ta: 'மிரிண்டா', unit: 'pcs', stock: 50, price: 120, cost: 100, reorder: 10 },
    { en: 'Milk', ta: 'பால்', unit: 'pack', stock: 40, price: 150, cost: 120, reorder: 10 },
    { en: 'Juice items', ta: 'ஜூஸ் வகைகள்', unit: 'pcs', stock: 60, price: 100, cost: 80, reorder: 15 },
    { en: 'Fruit', ta: 'பழங்கள்', unit: 'kg', stock: 50, price: 200, cost: 160, reorder: 10 },
    { en: 'Vegetable', ta: 'காய்கறிகள்', unit: 'kg', stock: 50, price: 150, cost: 120, reorder: 10 },
    { en: 'Sweet items', ta: 'இனிப்பு வகைகள்', unit: 'pcs', stock: 80, price: 50, cost: 35, reorder: 20 },
    { en: 'Biscuits', ta: 'பிஸ்கட்', unit: 'pack', stock: 70, price: 100, cost: 80, reorder: 15 },
    { en: 'Water bottle', ta: 'தண்ணீர் போத்தல்', unit: 'pcs', stock: 100, price: 70, cost: 50, reorder: 25 }
  ];

  class I18nManager {
    constructor() {
      // Default to Tamil as requested: "the sysytem shoul in tamil all thing"
      const saved = localStorage.getItem(STORAGE_KEY);
      this.currentLang = saved === 'en' ? 'en' : 'ta';
      this.translations = translations;
      this.productDict = PRODUCT_DICTIONARY;
    }

    getLanguage() {
      return this.currentLang;
    }

    isTamil() {
      return this.currentLang === 'ta';
    }

    t(key) {
      const dict = this.translations[this.currentLang] || this.translations.ta;
      return dict[key] || this.translations.en[key] || key;
    }

    setLanguage(lang) {
      if (lang !== 'ta' && lang !== 'en') lang = 'ta';
      this.currentLang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
      this.applyToDOM();
      this.updateToggleButtons();

      // Trigger dynamic refreshes in existing pages if initialized
      try {
        if (window.billing && typeof window.billing.renderItems === 'function') {
          window.billing.renderItems();
        }
        if (window.inventory && typeof window.inventory.render === 'function') {
          window.inventory.render();
        }
        if (window.historyView && typeof window.historyView.render === 'function') {
          window.historyView.render();
        }
        if (window.customersPage && typeof window.customersPage.render === 'function') {
          window.customersPage.render();
        }
        if (window.collectionPage && typeof window.collectionPage.render === 'function') {
          window.collectionPage.render();
        }
        if (window.expensesPage && typeof window.expensesPage.render === 'function') {
          window.expensesPage.render();
        }
        if (window.reportsView && typeof window.reportsView.render === 'function') {
          window.reportsView.render();
        }
      } catch (err) {
        console.warn('Error refreshing views on language change:', err);
      }
    }

    toggleLanguage() {
      const newLang = this.currentLang === 'ta' ? 'en' : 'ta';
      this.setLanguage(newLang);
    }

    // Product name translation and lookup helpers
    getProductName(product) {
      if (!product) return '';
      const rawName = String(product.name || '').trim();
      const match = this.productDict.find((item) =>
        item.ta.toLowerCase() === rawName.toLowerCase() ||
        item.en.toLowerCase() === rawName.toLowerCase() ||
        (product.name_en && item.en.toLowerCase() === product.name_en.toLowerCase()) ||
        (product.name_ta && item.ta.toLowerCase() === product.name_ta.toLowerCase())
      );

      if (match) {
        return this.currentLang === 'ta' ? match.ta : match.en;
      }

      if (this.currentLang === 'ta' && product.name_ta) return product.name_ta;
      if (this.currentLang === 'en' && product.name_en) return product.name_en;

      return rawName;
    }

    getBilingualName(product) {
      if (!product) return '';
      const rawName = String(product.name || '').trim();
      const match = this.productDict.find((item) =>
        item.ta.toLowerCase() === rawName.toLowerCase() ||
        item.en.toLowerCase() === rawName.toLowerCase()
      );
      if (match) {
        return `${match.ta} (${match.en})`;
      }
      return rawName;
    }

    findProductInDict(query) {
      const q = String(query || '').trim().toLowerCase();
      if (!q) return null;
      return this.productDict.find((item) =>
        item.ta.toLowerCase() === q ||
        item.en.toLowerCase() === q ||
        item.ta.toLowerCase().includes(q) ||
        item.en.toLowerCase().includes(q)
      ) || null;
    }

    // Apply translations to all DOM elements with data-i18n attributes
    applyToDOM() {
      const isTa = this.currentLang === 'ta';

      // 1. Elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const text = this.t(key);
        if (text) {
          // If element has icons or specific children, handle carefully
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.value = text;
          } else {
            el.textContent = text;
          }
        }
      });

      // 2. Elements with data-i18n-placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = this.t(key);
        if (text) el.setAttribute('placeholder', text);
      });

      // 3. Elements with data-i18n-title
      document.querySelectorAll('[data-i18n-title]').forEach((el) => {
        const key = el.getAttribute('data-i18n-title');
        const text = this.t(key);
        if (text) el.setAttribute('title', text);
      });

      // 4. Update Header Shop Name & Login page Details
      const brandElements = document.querySelectorAll('.shop-brand-name');
      brandElements.forEach((el) => {
        el.textContent = isTa ? 'மகேஸ்வானி வெற்றிலை' : 'Mageshvani Vetrilai';
      });

      const brandAddress = document.querySelectorAll('.shop-brand-address');
      brandAddress.forEach((el) => {
        el.innerHTML = isTa
          ? 'மகேஸ்வானி வெற்றிலை<br />பருத்தித்துறை வீதி, நெல்லியடி<br />076 10 30000 / 076 63 00004'
          : 'MAGESHVANI VETRILAI<br />POINT PEDRO ROAD, NELLIADY<br />076 10 30000 / 076 63 00004';
      });

      // 5. Update unit options in billing dropdowns if needed
      document.querySelectorAll('.item-unit-select').forEach((sel) => {
        const currentVal = sel.value;
        sel.innerHTML = `
          <option value="pcs"${currentVal === 'pcs' ? ' selected' : ''}>${this.t('unitPcs')}</option>
          <option value="kg"${currentVal === 'kg' ? ' selected' : ''}>${this.t('unitKg')}</option>
          <option value="g"${currentVal === 'g' ? ' selected' : ''}>${this.t('unitG')}</option>
          <option value="ltr"${currentVal === 'ltr' ? ' selected' : ''}>${this.t('unitLtr')}</option>
          <option value="pack"${currentVal === 'pack' ? ' selected' : ''}>${this.t('unitPack')}</option>
          <option value="box"${currentVal === 'box' ? ' selected' : ''}>${this.t('unitBox')}</option>
        `;
      });

      // 6. Update payment method options
      const paySel = document.getElementById('payment-method');
      if (paySel) {
        const currentVal = paySel.value;
        paySel.innerHTML = `
          <option value="cash"${currentVal === 'cash' ? ' selected' : ''}>${this.t('cash')}</option>
          <option value="card"${currentVal === 'card' ? ' selected' : ''}>${this.t('card')}</option>
          <option value="bank"${currentVal === 'bank' ? ' selected' : ''}>${this.t('bankTransfer')}</option>
          <option value="cheque"${currentVal === 'cheque' ? ' selected' : ''}>${this.t('cheque')}</option>
          <option value="credit"${currentVal === 'credit' ? ' selected' : ''}>${this.t('credit')}</option>
        `;
      }

      // 7. Update expense category options
      const expCatSel = document.getElementById('expense-category');
      if (expCatSel) {
        const currentVal = expCatSel.value;
        expCatSel.innerHTML = `
          <option value="Transport"${currentVal === 'Transport' ? ' selected' : ''}>${this.t('catTransport')}</option>
          <option value="Salary"${currentVal === 'Salary' ? ' selected' : ''}>${this.t('catSalary')}</option>
          <option value="Packing"${currentVal === 'Packing' ? ' selected' : ''}>${this.t('catPacking')}</option>
          <option value="Rent"${currentVal === 'Rent' ? ' selected' : ''}>${this.t('catRent')}</option>
          <option value="Utility"${currentVal === 'Utility' ? ' selected' : ''}>${this.t('catUtility')}</option>
          <option value="Other"${currentVal === 'Other' ? ' selected' : ''}>${this.t('catOther')}</option>
        `;
      }

      // 8. Update expense datalist suggestions
      const expDatalist = document.getElementById('expense-name-options');
      if (expDatalist) {
        if (isTa) {
          expDatalist.innerHTML = `
            <option value="கொள்முதல்"></option>
            <option value="விற்பனை"></option>
            <option value="எரிபொருள் / பெட்ரோல்"></option>
            <option value="போக்குவரத்து"></option>
            <option value="பணியாளர் சம்பளம்"></option>
            <option value="பொதி செய்தல்"></option>
            <option value="விளம்பரம்"></option>
            <option value="காலாவதி / சேதம்"></option>
            <option value="மின்சாரக் கட்டணம்"></option>
            <option value="தண்ணீர்க் கட்டணம்"></option>
            <option value="வாகன பராமரிப்பு"></option>
            <option value="வாடகை"></option>
            <option value="இதர செலவுகள்"></option>
            <option value="தொலைபேசி கட்டணம்"></option>
            <option value="உபகரணங்கள்"></option>
          `;
        } else {
          expDatalist.innerHTML = `
            <option value="Purchases"></option>
            <option value="Sales"></option>
            <option value="Fuel"></option>
            <option value="Transport"></option>
            <option value="Staff Wages / Salary"></option>
            <option value="Packaging"></option>
            <option value="Advertising"></option>
            <option value="Expired / Damage"></option>
            <option value="Electricity Bill"></option>
            <option value="Water Bill"></option>
            <option value="Vehicle Maintenance"></option>
            <option value="Rent"></option>
            <option value="Miscellaneous"></option>
            <option value="Telephone Bill"></option>
            <option value="Equipment"></option>
          `;
        }
      }

      // 9. Update report dropdown options
      const repTypeSel = document.getElementById('reports-type');
      if (repTypeSel) {
        const cur = repTypeSel.value;
        repTypeSel.innerHTML = `
          <option value="sales"${cur === 'sales' ? ' selected' : ''}>${this.t('repSales')}</option>
          <option value="profit"${cur === 'profit' ? ' selected' : ''}>${this.t('repProfit')}</option>
          <option value="receivables"${cur === 'receivables' ? ' selected' : ''}>${this.t('repReceivables')}</option>
          <option value="collections"${cur === 'collections' ? ' selected' : ''}>${this.t('repCollections')}</option>
          <option value="products"${cur === 'products' ? ' selected' : ''}>${this.t('repProducts')}</option>
          <option value="stock"${cur === 'stock' ? ' selected' : ''}>${this.t('repStock')}</option>
          <option value="payments"${cur === 'payments' ? ' selected' : ''}>${this.t('repPayments')}</option>
          <option value="cheques"${cur === 'cheques' ? ' selected' : ''}>${this.t('repCheques')}</option>
          <option value="expenses"${cur === 'expenses' ? ' selected' : ''}>${this.t('repExpenses')}</option>
          <option value="dayclose"${cur === 'dayclose' ? ' selected' : ''}>${this.t('repDayClose')}</option>
          <option value="lowstock"${cur === 'lowstock' ? ' selected' : ''}>${this.t('repLowStock')}</option>
          <option value="auditlog"${cur === 'auditlog' ? ' selected' : ''}>${this.t('repAuditLog')}</option>
          <option value="customers"${cur === 'customers' ? ' selected' : ''}>${this.t('repCustomers')}</option>
          <option value="audit"${cur === 'audit' ? ' selected' : ''}>${this.t('repDataAudit')}</option>
        `;
      }

      const repPeriodSel = document.getElementById('reports-period');
      if (repPeriodSel) {
        const cur = repPeriodSel.value;
        repPeriodSel.innerHTML = `
          <option value="today"${cur === 'today' ? ' selected' : ''}>${this.t('periodToday')}</option>
          <option value="this_month"${cur === 'this_month' ? ' selected' : ''}>${this.t('periodThisMonth')}</option>
          <option value="all"${cur === 'all' ? ' selected' : ''}>${this.t('periodAll')}</option>
          <option value="custom"${cur === 'custom' ? ' selected' : ''}>${this.t('periodCustom')}</option>
        `;
      }

      this.updateToggleButtons();
    }

    updateToggleButtons() {
      const isTa = this.currentLang === 'ta';
      const pills = document.querySelectorAll('.lang-toggle-btn');
      pills.forEach((btn) => {
        btn.innerHTML = `
          <span class="lang-icon">🌐</span>
          <span class="lang-pill ${isTa ? 'active' : ''}">தமிழ்</span>
          <span class="lang-divider">/</span>
          <span class="lang-pill ${!isTa ? 'active' : ''}">English</span>
        `;
        btn.setAttribute('title', isTa ? 'Switch to English' : 'தமிழுக்கு மாறவும்');
      });
    }

    init() {
      document.documentElement.lang = this.currentLang;
      this.applyToDOM();
      this.updateToggleButtons();
    }
  }

  window.i18n = new I18nManager();
  window.PRODUCT_DICTIONARY = PRODUCT_DICTIONARY;
})();
