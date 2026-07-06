// Placeholder questions — replace with your full App Builder question pool
const questionsAppBuilder = [
  {
    question:
      "Universal Containers wants to create a page that end users can access directly from the App Launcher, containing the most important lists, reports, and links for the Sales team. Which type of Lightning page should an App Builder create?",
    options: [
      { letter: 'A', text: 'Record Page' },
      { letter: 'B', text: 'App Page' },
      { letter: 'C', text: 'Home Page' },
      { letter: 'D', text: 'Community Page' },
    ],
    answers: ['B'],
    explanation:
      "A. Record Pages are tied to a specific object's record layout, not accessible standalone from the App Launcher. | B. ✅ An App Page is a custom Lightning page that isn't tied to a record; once activated, it can be added to the navigation of a Lightning app and accessed directly from the App Launcher. | C. Home Pages replace the default Home tab and are assigned by app/profile, not launched individually from the App Launcher. | D. There is no 'Community Page' type in Lightning App Builder; Experience Builder is used for Communities/Experience Cloud sites.",
  },
  {
    question:
      "An App Builder wants to display different fields and sections on a Case Lightning Record Page depending on the Case's Record Type. Which two features should be used together to achieve this?",
    options: [
      { letter: 'A', text: 'Dynamic Forms' },
      { letter: 'B', text: 'Page Layouts' },
      { letter: 'C', text: 'Component Visibility Filters' },
      { letter: 'D', text: 'Compact Layouts' },
    ],
    answers: ['A', 'C'],
    explanation:
      "A. ✅ Dynamic Forms let App Builders place individual fields and field sections directly on the Lightning page, rather than embedding the entire Page Layout as a single component. | B. Traditional Page Layouts are embedded as a single block and don't allow field-level conditional display within the Lightning App Builder. | C. ✅ Component Visibility filters can be set on individual fields or sections so they only display when the Record Type (or other field values) match specified conditions. | D. Compact Layouts control the fields shown in the highlights panel and related lists, not conditional section-level display.",
  },
  {
    question:
      "A Lightning App Page has been created and activated. What must an App Builder do to make this page appear in the App Launcher for users?",
    options: [
      { letter: 'A', text: 'Set it as the org default Home page' },
      { letter: 'B', text: "Add the page to a Lightning app's navigation items" },
      { letter: 'C', text: 'Assign it via a Permission Set' },
      { letter: 'D', text: 'Add the page to a Community' },
    ],
    answers: ['B'],
    explanation:
      "A. Setting an org default Home page applies to Home Pages, not App Pages, and doesn't add anything to the App Launcher. | B. ✅ App Pages become accessible from the App Launcher only once they are added as a navigation item within a Lightning App; it is the app itself that shows up in the App Launcher. | C. Permission Sets control object/field/tab access, not whether a page appears in the App Launcher. | D. Communities use Experience Builder sites, which are separate from the internal App Launcher.",
  },
  {
    question:
      "Which statement about assigning a custom Lightning Record Page is true?",
    options: [
      { letter: 'A', text: 'A Record Page can only be assigned as the org default for all users' },
      { letter: 'B', text: 'Record Page assignment supports app, record type, and profile combinations, with a default fallback' },
      { letter: 'C', text: 'Record Pages cannot be assigned per profile' },
      { letter: 'D', text: 'Only System Administrators can view a custom Record Page' },
    ],
    answers: ['B'],
    explanation:
      "A. While an org-wide default is possible, it is only one of several assignment options. | B. ✅ When activating a Lightning Record Page, the App Builder can assign it for specific combinations of app, record type, and profile, with the ability to fall back to a default for anything not explicitly covered. | C. Profile-based assignment is explicitly supported by the Lightning App Builder activation wizard. | D. Visibility depends on the assignment configured (app/record type/profile), not simply on the System Administrator profile.",
  },
  {
    question:
      "An App Builder needs to show an 'Escalate' button on a Lightning Record Page only when the Case Priority is 'High' and Status is not 'Closed'. Which feature enables this without writing code?",
    options: [
      { letter: 'A', text: 'Page Layout' },
      { letter: 'B', text: 'Dynamic Actions with filter conditions' },
      { letter: 'C', text: 'Global Actions' },
      { letter: 'D', text: 'Workflow Rule' },
    ],
    answers: ['B'],
    explanation:
      "A. Standard Page Layout actions are always visible and don't support conditional filters. | B. ✅ Dynamic Actions allow App Builders to define filter conditions (e.g., Priority equals High AND Status not equal Closed) so an action/button only appears when those conditions are met, with no code required. | C. Global Actions are available across the org (e.g., in the utility bar or Chatter), not scoped to conditional record-level display on a Lightning page. | D. Workflow Rules automate field updates, tasks, and notifications — they do not control the visibility of buttons on a Lightning page.",
  },
]

export default questionsAppBuilder
