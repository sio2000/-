import React from 'react';
import { Shield, Lock, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-full mb-6 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'en' ? 'Privacy Policy' : 'Πολιτική Απορρήτου'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Your privacy is important to us. Learn how we protect and manage your personal information.'
                : 'Το απόρρητό σας είναι σημαντικό για εμάς. Μάθετε πώς προστατεύουμε και διαχειριζόμαστε τα προσωπικά σας δεδομένα.'}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                {language === 'en' ? 'Introduction' : 'Εισαγωγή'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'This Privacy Policy explains how ForexBot ("we", "our", or "us") collects, uses, and protects your personal information when you use our website and services. We are committed to ensuring that your privacy is protected and maintaining the security of any personal information received from you.'
                  : 'Αυτή η Πολιτική Απορρήτου εξηγεί πώς το ForexBot ("εμείς", "μας" ή "εμάς") συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά σας δεδομένα όταν χρησιμοποιείτε τον ιστότοπο και τις υπηρεσίες μας. Δεσμευόμαστε να διασφαλίζουμε την προστασία του απορρήτου σας και να διατηρούμε την ασφάλεια οποιωνδήποτε προσωπικών πληροφοριών λαμβάνουμε από εσάς.'}
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Information Collection' : 'Συλλογή Πληροφοριών'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en' ? 'We collect the following types of information:' : 'Συλλέγουμε τους ακόλουθους τύπους πληροφοριών:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Personal information (name, email address, phone number) provided through contact forms'
                    : 'Προσωπικές πληροφορίες (όνομα, διεύθυνση email, τηλέφωνο) που παρέχονται μέσω φορμών επικοινωνίας'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Technical information (IP address, browser type, device information)'
                    : 'Τεχνικές πληροφορίες (διεύθυνση IP, τύπος προγράμματος περιήγησης, πληροφορίες συσκευής)'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Usage data (pages visited, time spent on site)'
                    : 'Δεδομένα χρήσης (σελίδες που επισκέφθηκαν, χρόνος παραμονής στον ιστότοπο)'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Communication records when you contact us'
                    : 'Αρχεία επικοινωνίας όταν επικοινωνείτε μαζί μας'}
                </li>
              </ul>
            </div>

            {/* Use of Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Use of Information' : 'Χρήση Πληροφοριών'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en' ? 'We use your information to:' : 'Χρησιμοποιούμε τις πληροφορίες σας για:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Provide and improve our services'
                    : 'Παροχή και βελτίωση των υπηρεσιών μας'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Communicate with you about our services'
                    : 'Επικοινωνία μαζί σας σχετικά με τις υπηρεσίες μας'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Send important updates and announcements'
                    : 'Αποστολή σημαντικών ενημερώσεων και ανακοινώσεων'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Analyze and improve our website performance'
                    : 'Ανάλυση και βελτίωση της απόδοσης του ιστότοπου μας'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Comply with legal obligations'
                    : 'Συμμόρφωση με νομικές υποχρεώσεις'}
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Data Sharing' : 'Κοινοποίηση Δεδομένων'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en' ? 'We may share your information with:' : 'Ενδέχεται να μοιραστούμε τις πληροφορίες σας με:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Service providers who assist in our operations'
                    : 'Παρόχους υπηρεσιών που βοηθούν στις λειτουργίες μας'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Legal authorities when required by law'
                    : 'Νομικές αρχές όταν απαιτείται από το νόμο'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Professional advisers (lawyers, accountants, auditors)'
                    : 'Επαγγελματίες συμβούλους (δικηγόρους, λογιστές, ελεγκτές)'}
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                {language === 'en'
                  ? 'We do not sell your personal information to third parties.'
                  : 'Δεν πωλούμε τα προσωπικά σας δεδομένα σε τρίτους.'}
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-blue-600" />
                {language === 'en' ? 'Data Security' : 'Ασφάλεια Δεδομένων'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en'
                  ? 'We implement appropriate security measures to protect your personal information, including:'
                  : 'Εφαρμόζουμε κατάλληλα μέτρα ασφαλείας για την προστασία των προσωπικών σας δεδομένων, συμπεριλαμβανομένων:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Encryption of data transmission'
                    : 'Κρυπτογράφηση μετάδοσης δεδομένων'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Secure servers and networks'
                    : 'Ασφαλείς διακομιστές και δίκτυα'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Access controls and authentication'
                    : 'Έλεγχοι πρόσβασης και αυθεντικοποίηση'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Regular security assessments'
                    : 'Τακτικές αξιολογήσεις ασφαλείας'}
                </li>
              </ul>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'User Rights' : 'Δικαιώματα Χρηστών'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en' ? 'You have the right to:' : 'Έχετε το δικαίωμα να:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Access your personal information'
                    : 'Αποκτήσετε πρόσβαση στα προσωπικά σας δεδομένα'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Correct inaccurate information'
                    : 'Διορθώσετε ανακριβείς πληροφορίες'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Request deletion of your information'
                    : 'Ζητήσετε διαγραφή των πληροφοριών σας'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Object to processing of your information'
                    : 'Αντιταχθείτε στην επεξεργασία των πληροφοριών σας'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Withdraw consent at any time'
                    : 'Αποσύρετε τη συγκατάθεσή σας οποιαδήποτε στιγμή'}
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Cookies' : 'Cookies'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en'
                  ? 'We use cookies to improve your browsing experience. You can control cookies through your browser settings. Our cookies are used for:'
                  : 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας. Μπορείτε να ελέγξετε τα cookies μέσω των ρυθμίσεων του προγράμματος περιήγησής σας. Τα cookies μας χρησιμοποιούνται για:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Essential website functionality'
                    : 'Βασική λειτουργικότητα του ιστότοπου'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Analytics and performance monitoring'
                    : 'Ανάλυση και παρακολούθηση απόδοσης'}
                </li>
                <li>
                  {language === 'en'
                    ? 'User preferences and settings'
                    : 'Προτιμήσεις και ρυθμίσεις χρήστη'}
                </li>
              </ul>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Changes to Privacy Policy' : 'Αλλαγές στην Πολιτική Απορρήτου'}
              </h2>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. Significant changes will be notified through email or website announcements.'
                  : 'Ενδέχεται να ενημερώνουμε αυτήν την Πολιτική Απορρήτου περιοδικά. Οι αλλαγές θα δημοσιεύονται σε αυτή τη σελίδα με ενημερωμένη ημερομηνία αναθεώρησης. Σημαντικές αλλαγές θα γνωστοποιούνται μέσω email ή ανακοινώσεων στον ιστότοπο.'}
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Contact Information' : 'Στοιχεία Επικοινωνίας'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en'
                  ? 'For any questions or concerns about this Privacy Policy, please contact us at:'
                  : 'Για οποιεσδήποτε ερωτήσεις ή ανησυχίες σχετικά με αυτήν την Πολιτική Απορρήτου, παρακαλούμε επικοινωνήστε μαζί μας στο:'}
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>Email: info@forexbot.gr</li>
                <li>
                  {language === 'en' ? 'Address: Kalamata, Greece' : 'Διεύθυνση: Καλαμάτα, Ελλάδα'}
                </li>
              </ul>
            </div>

            {/* Last Updated */}
            <div className="text-sm text-gray-500 pt-6 border-t">
              {language === 'en' ? 'Last updated: March 15, 2024' : 'Τελευταία ενημέρωση: 15 Μαρτίου 2024'}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 