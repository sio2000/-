import React from 'react';
import { Scale, FileText, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfService = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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
              <Scale className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'en' ? 'Terms of Service' : 'Όροι Χρήσης'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Please read these terms carefully before using our services'
                : 'Παρακαλούμε διαβάστε προσεκτικά αυτούς τους όρους πριν χρησιμοποιήσετε τις υπηρεσίες μας'}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                  ? 'By accessing and using ForexBot ("the Website"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and ForexBot ("we", "our", or "us").'
                  : 'Με την πρόσβαση και χρήση του ForexBot ("ο Ιστότοπος"), αποδέχεστε και συμφωνείτε να δεσμεύεστε από αυτούς τους Όρους Χρήσης. Εάν δεν συμφωνείτε με αυτούς τους όρους, παρακαλούμε μην χρησιμοποιείτε τις υπηρεσίες μας. Αυτοί οι όροι αποτελούν νομικά δεσμευτική συμφωνία μεταξύ εσάς και του ForexBot ("εμείς", "μας" ή "εμάς").'}
              </p>
            </div>

            {/* Use of the Website */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Use of the Website' : 'Χρήση του Ιστότοπου'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en' 
                  ? 'You agree to use the Website in accordance with the following conditions:'
                  : 'Συμφωνείτε να χρησιμοποιείτε τον Ιστότοπο σύμφωνα με τις ακόλουθες προϋποθέσεις:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Comply with all applicable laws and regulations'
                    : 'Συμμόρφωση με όλους τους ισχύοντες νόμους και κανονισμούς'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Use the service for lawful purposes only'
                    : 'Χρήση της υπηρεσίας μόνο για νόμιμους σκοπούς'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Not attempt to interfere with the Website\'s security or functionality'
                    : 'Μην επιχειρείτε να παρεμβαίνετε στην ασφάλεια ή τη λειτουργικότητα του Ιστότοπου'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Not engage in unauthorized data collection or mining'
                    : 'Μην εμπλέκεστε σε μη εξουσιοδοτημένη συλλογή δεδομένων ή εξόρυξη'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Respect other users and their rights'
                    : 'Σεβασμός των άλλων χρηστών και των δικαιωμάτων τους'}
                </li>
              </ul>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'User Accounts' : 'Λογαριασμοί Χρηστών'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en'
                  ? 'When creating and maintaining an account:'
                  : 'Κατά τη δημιουργία και διατήρηση λογαριασμού:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Provide accurate and complete information'
                    : 'Παρέχετε ακριβείς και πλήρεις πληροφορίες'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Maintain the security of your account credentials'
                    : 'Διατηρείτε την ασφάλεια των διαπιστευτηρίων του λογαριασμού σας'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Accept responsibility for all activities under your account'
                    : 'Αποδέχεστε την ευθύνη για όλες τις δραστηριότητες του λογαριασμού σας'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Notify us immediately of any unauthorized access'
                    : 'Ενημερώστε μας αμέσως για οποιαδήποτε μη εξουσιοδοτημένη πρόσβαση'}
                </li>
                <li>
                  {language === 'en'
                    ? 'One account per individual or entity'
                    : 'Ένας λογαριασμός ανά άτομο ή οντότητα'}
                </li>
              </ul>
            </div>

            {/* Intellectual Property Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Intellectual Property Rights' : 'Δικαιώματα Πνευματικής Ιδιοκτησίας'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'All content on this Website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of ForexBot or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of ForexBot.'
                  : 'Όλο το περιεχόμενο σε αυτόν τον Ιστότοπο, συμπεριλαμβανομένων αλλά όχι περιοριστικά κειμένων, γραφικών, λογοτύπων, εικόνων, ηχητικών κλιπ, ψηφιακών λήψεων, συλλογών δεδομένων και λογισμικού, είναι ιδιοκτησία του ForexBot ή των προμηθευτών περιεχομένου του και προστατεύεται από διεθνείς νόμους περί πνευματικών δικαιωμάτων. Η σύνθεση όλου του περιεχομένου σε αυτόν τον ιστότοπο είναι αποκλειστική ιδιοκτησία του ForexBot.'}
              </p>
            </div>

            {/* Content and Contributions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Content and Contributions' : 'Περιεχόμενο και Συνεισφορές'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en'
                  ? 'By submitting content to our Website:'
                  : 'Με την υποβολή περιεχομένου στον Ιστότοπό μας:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'You grant us a worldwide, non-exclusive license to use the content'
                    : 'Μας παραχωρείτε παγκόσμια, μη αποκλειστική άδεια χρήσης του περιεχομένου'}
                </li>
                <li>
                  {language === 'en'
                    ? 'You warrant that your content is original and non-infringing'
                    : 'Εγγυάστε ότι το περιεχόμενό σας είναι πρωτότυπο και δεν παραβιάζει δικαιώματα'}
                </li>
                <li>
                  {language === 'en'
                    ? 'We reserve the right to remove or modify any content'
                    : 'Διατηρούμε το δικαίωμα να αφαιρέσουμε ή να τροποποιήσουμε οποιοδήποτε περιεχόμενο'}
                </li>
                <li>
                  {language === 'en'
                    ? 'You accept responsibility for your contributions'
                    : 'Αποδέχεστε την ευθύνη για τις συνεισφορές σας'}
                </li>
              </ul>
            </div>

            {/* Limitations of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
                {language === 'en' ? 'Limitations of Liability' : 'Περιορισμοί Ευθύνης'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en'
                  ? 'Our services are provided "as is" without any warranties. We shall not be liable for:'
                  : 'Οι υπηρεσίες μας παρέχονται "ως έχουν" χωρίς εγγυήσεις. Δεν φέρουμε ευθύνη για:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Any direct, indirect, or consequential damages'
                    : 'Οποιεσδήποτε άμεσες, έμμεσες ή επακόλουθες ζημιές'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Loss of profits or trading losses'
                    : 'Απώλεια κερδών ή ζημιές συναλλαγών'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Data loss or system failures'
                    : 'Απώλεια δεδομένων ή αστοχίες συστήματος'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Accuracy of financial information or advice'
                    : 'Ακρίβεια οικονομικών πληροφοριών ή συμβουλών'}
                </li>
              </ul>
            </div>

            {/* Third-Party Links and Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Third-Party Links and Services' : 'Σύνδεσμοι και Υπηρεσίες Τρίτων'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'Our Website may contain links to third-party websites or services. We are not responsible for the content, accuracy, or practices of these third-party sites. Use of third-party services is at your own risk and subject to their respective terms of service.'
                  : 'Ο Ιστότοπός μας μπορεί να περιέχει συνδέσμους προς ιστότοπους ή υπηρεσίες τρίτων. Δεν είμαστε υπεύθυνοι για το περιεχόμενο, την ακρίβεια ή τις πρακτικές αυτών των ιστότοπων τρίτων. Η χρήση υπηρεσιών τρίτων γίνεται με δική σας ευθύνη και υπόκειται στους αντίστοιχους όρους χρήσης τους.'}
              </p>
            </div>

            {/* Termination of Access */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Termination of Access' : 'Τερματισμός Πρόσβασης'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en' ? 'We reserve the right to:' : 'Διατηρούμε το δικαίωμα να:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {language === 'en'
                    ? 'Terminate or suspend access without prior notice'
                    : 'Τερματίσουμε ή να αναστείλουμε την πρόσβαση χωρίς προειδοποίηση'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Block IP addresses or users violating these terms'
                    : 'Αποκλείσουμε διευθύνσεις IP ή χρήστες που παραβιάζουν αυτούς τους όρους'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Take legal action against violations'
                    : 'Προβούμε σε νομικές ενέργειες για παραβιάσεις'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Report illegal activities to authorities'
                    : 'Αναφέρουμε παράνομες δραστηριότητες στις αρχές'}
                </li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Changes to Terms' : 'Αλλαγές στους Όρους'}
              </h2>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'We may modify these terms at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website after changes constitutes acceptance of the modified terms. We will notify users of significant changes via email or website announcement.'
                  : 'Μπορούμε να τροποποιήσουμε αυτούς τους όρους ανά πάσα στιγμή. Οι αλλαγές θα τεθούν σε ισχύ αμέσως μετά τη δημοσίευσή τους στον Ιστότοπο. Η συνεχιζόμενη χρήση του Ιστότοπου μετά τις αλλαγές συνιστά αποδοχή των τροποποιημένων όρων. Θα ειδοποιούμε τους χρήστες για σημαντικές αλλαγές μέσω email ή ανακοίνωσης στον ιστότοπο.'}
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Governing Law' : 'Εφαρμοστέο Δίκαιο'}
              </h2>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'These terms are governed by and construed in accordance with the laws of Greece. Any disputes shall be subject to the exclusive jurisdiction of the courts in Greece.'
                  : 'Αυτοί οι όροι διέπονται και ερμηνεύονται σύμφωνα με τους νόμους της Ελλάδας. Οποιεσδήποτε διαφορές θα υπόκεινται στην αποκλειστική δικαιοδοσία των δικαστηρίων στην Ελλάδα.'}
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Contact Information' : 'Στοιχεία Επικοινωνίας'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'en'
                  ? 'For any questions about these Terms of Service, please contact us at:'
                  : 'Για οποιεσδήποτε ερωτήσεις σχετικά με αυτούς τους Όρους Χρήσης, παρακαλούμε επικοινωνήστε μαζί μας στο:'}
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

export default TermsOfService; 