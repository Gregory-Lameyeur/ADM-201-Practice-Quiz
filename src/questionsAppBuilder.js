// Placeholder questions — replace with your full App Builder question pool
const questionsAppBuilder = [
  {
    question: "An app builder needs to deploy a new account detail page layout from sandbox to production. Which three components should an app builder include in the Change Set to ensure it deploys successfully and visually as expected? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Detail page layout' },
      { letter: 'B', text: 'Custom fields' },
      { letter: 'C', text: 'Custom actions' },
      { letter: 'D', text: 'Lightning App Builder' },
      { letter: 'E', text: 'System administrator profile' }
    ],
    answers: ['A', 'B', 'C'],
    explanation: "To deploy a new account detail page layout from sandbox to production, an app builder should include three components in the change set: Detail page layout: The page layout defines the arrangement of fields, buttons, related lists, and other components on a record detail or edit page. It also controls which fields are required or read-only for users. Custom fields: Custom fields are fields that are created by users to store additional information on standard or custom objects. Custom fields can have different data types, such as text, number, date, picklist, etc. Custom actions: Custom actions are actions that are created by users to extend the functionality of standard or custom objects. Custom actions can be global or object-specific, and they can invoke different tools such as Lightning components, Visualforce pages, flows, etc."
  },
  {
    question: "DreamHouse Realty (DR) has many properties for sale and wants to identify the highest value of all Offer__c records on each Property__c record. Which solution should the app builder use to meet DR's needs provided that there is a master-detail relationship between the objects?",
    options: [
      { letter: 'A', text: 'Roll-up Summary' },
      { letter: 'B', text: 'Rich Text Area' },
      { letter: 'C', text: 'Text Area (Long)' },
      { letter: 'D', text: 'Multi-select Picklist' }
    ],
    answers: ['A'],
    explanation: "Since there is a master-detail relationship between Property__c (master) and Offer__c (detail), Salesforce natively supports using Roll-up Summary fields on the master object to summarize values from the related child records. Why A (Roll-up Summary) is correct: A roll-up summary field calculates values from related records, such as those in a related list, on a master record. You can count the number of related records, determine the sum, minimum, or maximum value of a field in the related records. Therefore, DR can create a Roll-up Summary field on Property__c that uses the MAX function on the \"Offer Value\" field from Offer__c. Why not B, C, or D: Rich Text Area and Text Area (Long) store text, not calculated numeric data. Multi-select Picklist is used for multiple selectable text options, not calculations."
  },
  {
    question: "The case handling process at Universal Containers includes multiple steps Including approvals, notifications, and fields updates. To manage and evaluate all of these changes in a single save operation, an app builder wants to use Process Builder and the Advanced option to let the process evaluate a record multiple times has been selected. Which two options should the app builder avoid to prevent recursion? Choose 2 answers",
    options: [
      { letter: 'A', text: 'IF statements' },
      { letter: 'B', text: 'Setting a criteria node to No criteria-just execute the procedure' },
      { letter: 'C', text: 'Invocable processes' },
      { letter: 'D', text: 'The ISCHANGED function' }
    ],
    answers: ['B', 'C'],
    explanation: "The two options that the app builder should avoid to prevent recursion are setting a criteria node to No criteria-just execute the procedure and invocable processes. Setting a criteria node to No criteria-just execute the procedure means that the process will always execute the actions regardless of the record values, which can cause recursion if the process updates the same record that triggered it. Invocable processes are processes that can be invoked from another process or a flow, which can cause recursion if the invocable process updates the same record that triggered the parent process or flow. Option A is incorrect because IF statements are not an option in Process Builder, but rather a function that can be used in formulas or conditions. Option D is incorrect because the ISCHANGED function is not an option in Process Builder, but rather a function that can be used in formulas or conditions to check if a field value has changed."
  },
  {
    question: "Cloud Kicks has leads owned by users and queues. The sales manager wants the status to change to working when a user takes ownership. What does an app builder need to have in the criteria to ensure the process runs without error?",
    options: [
      { letter: 'A', text: 'BEGINS([Lead].OwnerId, ,,005")' },
      { letter: 'B', text: '[Lead].Owner:User.Role Is Null = False' },
      { letter: 'C', text: '[Lead].Owner:Queue.OwnerId Is Null = True' },
      { letter: 'D', text: 'NOT(ISBLANK([Lead].OwnerId))' }
    ],
    answers: ['D'],
    explanation: "The app builder needs to have NOT(ISBLANK([Lead].OwnerId)) in the criteria to ensure the process runs without error. This formula checks if the OwnerId field on the Lead object is not blank, which means that the lead is owned by a user or a queue. This will prevent the process from running on leads that are not owned by anyone, which could cause an error. Option A, B, and C are not formulas that can ensure the process runs without error."
  },
  {
    question: "Universal Containers (UC) wants to test code against a subset of production data that is under 5 GB. Additionally, UC wants to refresh this sandbox every weekend. Which type of sandbox should be used to accomplish this?",
    options: [
      { letter: 'A', text: 'Developer Pro' },
      { letter: 'B', text: 'Partial Copy' },
      { letter: 'C', text: 'Full Copy' },
      { letter: 'D', text: 'Developer' }
    ],
    answers: ['B'],
    explanation: "To test code against a subset of production data under 5 GB and to refresh the sandbox environment weekly, the most suitable type of sandbox is: Partial Copy (B). A Partial Copy sandbox includes a copy of your production org's metadata and a subset of your production data as defined by the sandbox template. It allows up to 5 GB of data and can be refreshed every 5 days, making it ideal for scenarios where a representative sample of production data is needed for testing without the storage and refresh limitations of a Full Copy sandbox. Developer Pro (A) and Developer (D) sandboxes also allow for testing and development but do not include a subset of production data-they either have no data or only limited sample data. A Full Copy sandbox (C) provides a full replica of production data, far exceeding the 5 GB requirement and generally is refreshed less frequently due to larger data volume and longer copy times."
  },
  {
    question: "DreamHouse Realty (DR) has many properties for sale and wants to identify the highest value of all Offer__c records on each Property__c record. What solution should the app builder use to meet DreamHouse Realty's needs?",
    options: [
      { letter: 'A', text: 'Master-Detail Child Object' },
      { letter: 'B', text: 'Text Area (Long)' },
      { letter: 'C', text: 'Multi-select Picklist' },
      { letter: 'D', text: 'Lookup Object' }
    ],
    answers: ['A'],
    explanation: "The solution that the app builder should use to meet DreamHouse Realty's needs is Master-Detail Child Object. A master-detail relationship can be used to create a parent-child relationship between two objects, where the child records inherit the sharing and security settings of their parent record. The app builder can create a roll-up summary field on the parent object to calculate the highest value of all child records. Option B is incorrect because Text Area (Long) is a field type that allows users to enter up to 131,072 characters on one line, which is not suitable for this requirement. Option C is incorrect because Multi-select Picklist is a field type that allows users to select multiple values from a predefined list, which is not suitable for this requirement. Option D is incorrect because Lookup Object is not a valid term, but rather Lookup Relationship, which is a type of relationship that links two objects together, but does not support roll-up summary fields."
  },
  {
    question: "A Service Coordinator (SC) for Ursa Major Solar (UMS) does a final review of work orders owned by a technician for a specific region before the records are submitted for an invoice. Before closing out the work order, the SC needs to modify data or remove attachments that were added by mistake. The SC also needs access to any other related records owned by the technician. What solution would provide the required access, given a private data model?",
    options: [
      { letter: 'A', text: 'Give the SC a permission set with the Modify All Data system permission.' },
      { letter: 'B', text: 'Put the SC in the role hierarchy above the technicians whose work orders they review.' },
      { letter: 'C', text: 'Create a workflow rule that updates records owned by technicians in that region with the SC.' },
      { letter: 'D', text: 'Change work order access on the SC\'s profile to \'Modify AIl\'.' }
    ],
    answers: ['B'],
    explanation: "Putting the SC in the role hierarchy above the technicians whose work orders they review will provide the required access, given a private data model. The role hierarchy determines how users can access records they do not own. Users at any given role level can view, edit, and report on all data owned by or shared with users below them in the role hierarchy."
  },
  {
    question: "Cloud Kicks wants to display the number of Opportunity records associated with each Account. Which solution should be used?",
    options: [
      { letter: 'A', text: 'Formula field' },
      { letter: 'B', text: 'Roll-up Summary field' },
      { letter: 'C', text: 'AppExchange offering' },
      { letter: 'D', text: 'Lookup field' }
    ],
    answers: ['B'],
    explanation: "Opportunities are in a master-detail-like relationship with Accounts (standard lookup behaves with special roll-up capabilities). Salesforce provides a standard roll-up summary feature on the Account object to count related Opportunities. Why B (Roll-up Summary) is correct: Use a roll-up summary field to automatically display a value from related detail records on a master record. You can count related records, or calculate the sum, min, or max of a field on those records. On Account, you can create a roll-up summary field to COUNT related Opportunities. Why not A: Formula fields cannot count related records. Why not C: AppExchange is not required; Salesforce provides native functionality. Why not D: A lookup only links records-it does not perform aggregation."
  },
  {
    question: "Which three Salesforce functionalities are ignored when processing field updates in workflow rules and approval processes?",
    options: [
      { letter: 'A', text: 'Multiple currencies' },
      { letter: 'B', text: 'Field-Level Security' },
      { letter: 'C', text: 'Validation Rules' },
      { letter: 'D', text: 'Record type picklist value assignments' },
      { letter: 'E', text: 'Decimal places and character limits' }
    ],
    answers: ['B', 'C', 'E'],
    explanation: "The three Salesforce functionalities that are ignored when processing field updates in workflow rules and approval processes are: Field-Level Security: This means that the field update will occur regardless of the user's profile or permission set settings that determine whether they can see or edit the field. Validation Rules: This means that the field update will bypass any validation rules that might otherwise prevent the record from being saved. Decimal places and character limits: This means that the field update will round or truncate the value to fit the field's format, without throwing an error."
  },
  {
    question: "Nickname__c is a custom text field on a contact record that is utilized to override the contact's name appearing on an email template. This field is not required and is not always filled in. Which formula should an app builder use to select the contact's preferred name for email communications?",
    options: [
      { letter: 'A', text: 'IF(NOT(ISBLANK(Nickname__c)), Nickname_c,FirstName)' },
      { letter: 'B', text: 'IF(TEXT(Nfckname__c), Nickname_c,FirstName)' },
      { letter: 'C', text: 'IF (ISNUUL(Nteknarne _..c),Nicknamec,Firstftame)' },
      { letter: 'D', text: 'IF(NOT(BLANKVALUE(Nickname__c)), Nickname__c, FirstName)' }
    ],
    answers: ['D'],
    explanation: "The formula that should be used to select the contact's preferred name for email communications is IF(NOT(BLANKVALUE(Nickname__c)),Nickname__c, FirstName). This formula checks if the Nickname__c field is blank or null, and if not, it returns the value of the Nickname__c field. Otherwise, it returns the value of the FirstName field."
  },
  {
    question: "The services manager wants to make sure the team enters case priority consistently. What feature can an app builder use to accomplish this?",
    options: [
      { letter: 'A', text: 'Path' },
      { letter: 'B', text: 'Flow' },
      { letter: 'C', text: 'Next Best Action' },
      { letter: 'D', text: 'In-App Guidance' }
    ],
    answers: ['A'],
    explanation: "The best feature to use to ensure consistent case priority entry is Path. Path allows users to see key fields and guidance for each stage of a process, such as a case lifecycle. Path can also enforce data quality by making certain fields required at each stage."
  },
  {
    question: "Manage at Universal Containers want a quick way to create additional accounts to form a hierarchy from a parent account record. They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly.",
    options: [
      { letter: 'A', text: 'Custom Global Quick Action' },
      { letter: 'B', text: 'Custom Global Quick Account.' },
      { letter: 'C', text: 'Custom action on Account' },
      { letter: 'D', text: 'Custom link on Account' }
    ],
    answers: ['C'],
    explanation: "A custom action on Account can be used to create additional accounts from a parent account record. A custom action can have predefined values for certain fields based on the parent record. A custom global action can be used to create records that do not have any relationship with other objects. A custom link on Account can be used to execute JavaScript or link to an external URL."
  },
  {
    question: "Universal Containers created a 'New Task' custom action on the Opportunity object. The action was added to all page layouts in the Mobile & Lightning Actions section. Which Lightning component should the app builder add to the layout to display the action?",
    options: [
      { letter: 'A', text: 'Related record' },
      { letter: 'B', text: 'Related lists' },
      { letter: 'C', text: 'Highlights panel' },
      { letter: 'D', text: 'Activities' }
    ],
    answers: ['C'],
    explanation: "The best Lightning component to add to the layout to display the 'New Task' custom action is Highlights panel. This component shows key information and actions for a record, such as its name, owner, and custom actions. Related record, related lists, and activities are not Lightning components that display custom actions."
  },
  {
    question: "Cloud Kicks has three types of customer support processes: Platinum, Diamond, and Bronze. The app builder created separate record types for each process on the Case object. The customer support team should be unable to create new cases with the Bronze record type. How should this requirement be met?",
    options: [
      { letter: 'A', text: 'Update the organization-wide defaults to private for Case.' },
      { letter: 'B', text: 'Update the support team profile to remove the Bronze record type.' },
      { letter: 'C', text: 'Create permission set group for Case that includes Platinum and Diamond record types.' },
      { letter: 'D', text: 'Make the record type hidden to support users; update sharing roles to private.' }
    ],
    answers: ['B'],
    explanation: "The solution that should meet this requirement is updating the support team profile to remove the Bronze record type. This way, the support team users will not be able to create new cases with the Bronze record type, as it will not appear in their record type selection list. Option A is incorrect because updating the organization-wide defaults to private for Case does not affect the record type availability, but rather the record access level. Option C is incorrect because creating permission set group for Case that includes Platinum and Diamond record types does not prevent the support team users from creating new cases with the Bronze record type, as they may still have access to it through their profile. Option D is incorrect because making the record type hidden to support users and updating sharing roles to private does not prevent the support team users from creating new cases with the Bronze record type, as they may still have access to it through their profile."
  },
  {
    question: "An app builder has modified a Lightning record page for a case and has added an email button item to the page layout; however, users are unable to see the new item on the layout. What are two potential reasons why users are unable to view the item on the Case Lightning record page? Choose 2 answers",
    options: [
      { letter: 'A', text: 'The page layout includes the case feed component.' },
      { letter: 'B', text: 'The email button contains JavaScript.' },
      { letter: 'C', text: 'The case page layout also contains custom buttons.' },
      { letter: 'D', text: 'The page layout excludes the case feed component.' }
    ],
    answers: ['A', 'B'],
    explanation: "The email button item will not be visible on the Lightning record page if the page layout includes the case feed component or if the email button contains JavaScript. The case feed component replaces the standard buttons on the page layout with actions in the feed. The email button item will not work if it contains JavaScript because JavaScript buttons are not supported in Lightning Experience."
  },
  {
    question: "Universal Containers is setting up salesforce for the first time. Management wants the sales and marketing teams to have different navigation names in the salesforce1 mobile app. Which option is available to an app builder to satisfy the requirement?",
    options: [
      { letter: 'A', text: 'Create sales and marketing profiles to ensure read access to different objects' },
      { letter: 'B', text: 'Create roles for sales and marketing and assign a custom homepage layout for each role.' },
      { letter: 'C', text: 'Create mobile navigation menus for both the sales and marketing profiles.' },
      { letter: 'D', text: 'Create public groups for sales and marketing and create mobile navigation menus for each group.' }
    ],
    answers: ['C'],
    explanation: "Create mobile navigation menus for both the sales and marketing profiles. This is correct because mobile navigation menus allow users to customize the items that appear in the navigation bar of the Salesforce mobile app, and they can be assigned to different profiles."
  },
  {
    question: "At Ursa Solar Major, only users with the Outer Planets profile need to see the Jupiter field on the Solar System object. How should the app builder satisfy this requirement?",
    options: [
      { letter: 'A', text: 'Classic encryption' },
      { letter: 'B', text: 'Filtered view' },
      { letter: 'C', text: 'Field-level security' },
      { letter: 'D', text: 'Sharing rules' }
    ],
    answers: ['C'],
    explanation: "To restrict visibility of the Jupiter field on the Solar System object specifically to users with the Outer Planets profile: C. Field-level security (FLS). This allows the app builder to control access to fields based on user profiles. Steps to set up field-level security: Navigate to Setup → Object Manager → Solar System. Select Fields & Relationships → Jupiter field. Click Field-Level Security. For all profiles except Outer Planets, set the Visible option to unchecked, ensuring these users cannot see the field. For the Outer Planets profile, check Visible to grant access. This configuration ensures that only users with the Outer Planets profile can view the Jupiter field."
  },
  {
    question: "The CFO of Cloud Kicks needs to sign off on any major show retail deal that has a discount of more than 30% before the deal can be closed. What feature would be used to handle this requirement?",
    options: [
      { letter: 'A', text: 'Approval Process' },
      { letter: 'B', text: 'Email Alert' },
      { letter: 'C', text: 'Field Update' },
      { letter: 'D', text: 'Workflow Rule' }
    ],
    answers: ['A'],
    explanation: "Approval Process is the feature that would be used to handle the requirement of signing off on major show retail deals with more than 30% discount. According to the Salesforce documentation, \"An approval process automates how Salesforce records are approved in your org.\" Email Alert, Field Update, and Workflow Rule are actions that can be triggered by an approval process, but they are not features for handling approvals."
  },
  {
    question: "A custom field on an account is used to track finance information about a customer. Only members of the Finance Team have access to this field. However, the business wants to allow one customer service agent, who is assigned the customer service profile, read-only access to this field for special circumstances. What is the recommended solution to grant the customer service agent access to the field?",
    options: [
      { letter: 'A', text: 'Create a permission set that allows read-only access to the field via Field Level Security and assign it to the agent.' },
      { letter: 'B', text: 'Create a new profile to allow for read-only access to the field via Field Level Security and assign it to the agent' },
      { letter: 'C', text: 'Update the Customer Service Profile already assigned to the agent to allow for read-only access to the field via Field Level Security' },
      { letter: 'D', text: 'Update the custom field\'s Field Level Security in setup to allow the agent read-only access to the field.' }
    ],
    answers: ['A'],
    explanation: "The recommended solution to grant the customer service agent access to the field is creating a permission set that allows read-only access to the field via Field Level Security and assigning it to the agent. A permission set is a collection of settings and permissions that give users access to various tools and functions. Field Level Security (FLS) is a setting that controls the access level of fields for different profiles or permission sets. The app builder can create a permission set that grants read-only access to the custom field on the account object via FLS and assign it to the agent. Option B is incorrect because creating a new profile to allow for read-only access to the field via FLS and assigning it to the agent is not recommended, as profiles are used to define the baseline permissions and settings for a group of users, and creating multiple profiles for individual users can be hard to maintain. Option C is incorrect because updating the Customer Service Profile already assigned to the agent to allow for read-only access to the field via FLS is not recommended, as this will affect all users who have the same profile, which may violate the security policy. Option D is incorrect because updating the custom field's FLS in setup to allow the agent read-only access to the field is not possible, as FLS can only be set at the profile or permission set level, not at the user level."
  },
  {
    question: "Universal Containers has a new custom object for Invoices that includes an Invoice Number field, Before the Invoice object can be used, invoices will be migrated from an external system maintaining their current Invoice Number. After the migration, salesforce will be the system of record and each new Invoice created in Salesforce must have a unique Invoice Number. How should the app builder configure the Invoice Number field?",
    options: [
      { letter: 'A', text: 'Create a Text filed for the original Invoice Number and an AutoNumber field for the Salesforce Invoice Number.' },
      { letter: 'B', text: 'Create a Text field and mark it as a unique external ID field.' },
      { letter: 'C', text: 'Create a Text field, then change it to AutoNumber after the migration.' },
      { letter: 'D', text: 'Create an AutoNumber field and migrate the Invoices' }
    ],
    answers: ['B'],
    explanation: "The Invoice Number field should be a Text field and marked as a unique external ID field. This will allow the migration of invoices from an external system while maintaining their original Invoice Number. It will also ensure that each new Invoice created in Salesforce has a unique Invoice Number."
  },
  {
    question: "Universal Containers wants to create a custom checkbox formula field on the Opportunity object. This formula should evaluate to true if the following conditions are met: Stage is set to Negotiation/Review, Close Date is less than 1 week away. Which formula meets these requirements?",
    options: [
      { letter: 'A', text: "AND(StageName = 'Negotiation/Review', CloseDate - 7 < TODAY())" },
      { letter: 'B', text: "AND(ISPICKVAL(StageName, \"Negotiation/Review\"), CloseDate - 7 < TODAY())" },
      { letter: 'C', text: "AND(StageName = 'Negotiation/Review', CloseDate - DAY(7) < TODAY())" },
      { letter: 'D', text: "AND(ISPICKVAL(StageName, 'Negotiation/Review'), CloseDate - DAY(7) < TODAY())" }
    ],
    answers: ['B'],
    explanation: "For a formula to evaluate to true when the stage is set to \"Negotiation/Review\" and the close date is less than one week away, the correct formula is Option B. This formula uses the ISPICKVAL function to check the text value of a picklist and compares the CloseDate to a week from today: AND(ISPICKVAL(StageName, \"Negotiation/Review\"), CloseDate - 7 < TODAY()). This formula checks that both conditions are met: it confirms the stage name is \"Negotiation/Review\" and that the CloseDate is within the next 7 days from the current date. Option A lacks the ISPICKVAL function necessary for evaluating picklist fields. Option C uses DAY(7) which is not a valid Salesforce formula expression. Option D also uses DAY(7) incorrectly and fails to use the ISPICKVAL function."
  },
  {
    question: "Universal Containers has a Lightning record page that supports both the mobile app and desktop. An app builder has downloaded a custom Lightning component from AppExchange, but users are unable to view the component on mobile devices. What can be the issue?",
    options: [
      { letter: 'A', text: 'The record page needs to be activated.' },
      { letter: 'B', text: 'The component has been developed for Desktop Pages.' },
      { letter: 'C', text: 'The component needs to be activated.' },
      { letter: 'D', text: 'The record page template is unable to support mobile devices.' }
    ],
    answers: ['B'],
    explanation: "The most likely reason why users are unable to view the custom Lightning component on mobile devices is that the component has been developed for Desktop Pages only. Some components are not supported on mobile devices or have different behavior on mobile devices. An app builder should check the component documentation or metadata to see if it is compatible with mobile devices."
  },
  {
    question: "The marketing team at UVC has a list of 400 leads it wants to upload to Salesforce. The team need to avoid creating duplicate records. Which two actions should be taken to meet this requirement? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads.' },
      { letter: 'B', text: 'Upload the lead list using the import wizard and select a Matching type to prevent duplicate lead creation.' },
      { letter: 'C', text: 'Use Data Loader\'s update function to import lead and match to existing records based on e-mail address.' },
      { letter: 'D', text: 'Enable Duplicate Matching in the Data Management section in Setup and activate the Lead-to_Lead scenario.' }
    ],
    answers: ['A', 'B'],
    explanation: "The best actions to take to avoid creating duplicate leads when uploading a list of 400 leads are to utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads, and to upload the lead list using the import wizard and select a Matching type to prevent duplicate lead creation. The Lead Matching Rule defines the criteria for identifying duplicate leads, and the Duplicate Rule defines the actions to take when a duplicate is detected. The import wizard allows users to choose a Matching type based on the Lead Matching Rule and block or allow duplicates. Using Data Loader's update function or enabling Duplicate Matching in the Data Management section will not prevent duplicate lead creation."
  },
  {
    question: "Universal Containers uses the Asset object to track products that are installed at customer locations. A new object, Asset Inventory, has been created to capture details about the asset. Which approach should the app builder take to show Asset Inventory as a related list on Asset?",
    options: [
      { letter: 'A', text: 'Create a roll-up on Asset. Add the Asset Inventory related list to the Asset page layout.' },
      { letter: 'B', text: 'Create a junction object to relate Asset Inventory and Asset. Add the Asset Inventory related list to the Asset page layout.' },
      { letter: 'C', text: 'Create a lookup relationship on Asset Inventory to Asset. Add the Asset Inventory related list to the Asset page layout.' },
      { letter: 'D', text: 'Create a master-detail relationship on Asset-to-Asset Inventory Add the Asset Inventory related list to the Asset page layout.' }
    ],
    answers: ['C'],
    explanation: "The best way to show Asset Inventory as a related list on Asset is to create a lookup relationship on Asset Inventory to Asset. This will allow one-to-many relationship between Asset and Asset Inventory, and display the related records on the Asset page layout."
  },
  {
    question: "Universal Containers has a requirement that an opportunity should have a field showing the value of its associated account's billing state. This value should be static after the opportunity has been created.",
    options: [
      { letter: 'A', text: 'Roll-up summary field' },
      { letter: 'B', text: 'Formula field' },
      { letter: 'C', text: 'Flow' },
      { letter: 'D', text: 'Apex' }
    ],
    answers: ['C'],
    explanation: "The requirement is to copy the parent Account's Billing State onto a custom field on Opportunity at the moment the Opportunity is created, and keep that value static thereafter. A Record-Triggered Flow on Opportunity (when a record is created) can set a field value by referencing the related Account and writing it into a dedicated \"snapshot\" field. Because this is a one-time assignment on create, the value remains static unless intentionally updated by further automation. A formula would always recalculate, so the value would change if the Account's Billing State later changes. Roll-up summary fields only summarize child records onto a master (parent) record; they do not copy values from a parent down to a child, and they can't summarize a text/state value. While Apex could do the same copy-on-create, Salesforce's recommended approach is to use declarative automation (Flow) when possible."
  },
  {
    question: "A new field is being created on a custom object. However, the app builder does not want the field to show up on pre-existing custom report types. What should the app builder do on the custom field setup to fulfill this requirement?",
    options: [
      { letter: 'A', text: 'Remove the new field from all page layouts.' },
      { letter: 'B', text: 'Remove visibility to all report profiles.' },
      { letter: 'C', text: 'Grant read-only access to all report profiles.' },
      { letter: 'D', text: 'Deselect auto add to custom report type.' }
    ],
    answers: ['D'],
    explanation: "When creating a new field, if an app builder does not want the field to be automatically added to pre-existing custom report types, the step to take is to Deselect 'Add Field to Custom Report Types'. This option is available when creating or editing a custom field and ensures that the field is not automatically included in report types where 'Automatically add new custom fields to report type layouts' is enabled. Removing the field from page layouts affects the visibility on record pages but not reports. Adjusting visibility or setting read-only access for report profiles affects user permissions to see the field in reports, but does not remove the field from report types if it was previously added."
  },
  {
    question: "DreamHouseRealty (DR) is expanding into subsidized housing by partnering with local government entitles. DR uses Sales Cloud and has enabled field history tracking on the Opportunity object. Due to increased Information requirements, the App Dev team is changing Text Area (Long) fields to Rich Text fields to allow for up to 1,000 characters and better descriptions. Which two considerations should be made by the team? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Rich text field values of all lengths are displayed fully in reports.' },
      { letter: 'B', text: 'Data loss may occur when changing custom field types.' },
      { letter: 'C', text: 'Field History Tracking records value changes of 255 characters or less.' },
      { letter: 'D', text: 'Audit Trail is available through REST API extracts.' }
    ],
    answers: ['B', 'C'],
    explanation: "Changing custom field types may result in data loss if the new field type is incompatible with the old one. For example, changing a text field to a number field may cause text values to be deleted. Field history tracking records value changes of 255 characters or less. If a rich text field value exceeds this limit, only the first 255 characters are tracked."
  },
  {
    question: "Northern Trail Outfitters wants to initiate a daily backup of its Salesforce org. Which tool should an app builder recommend for this task?",
    options: [
      { letter: 'A', text: 'Report export' },
      { letter: 'B', text: 'Refresh full copy sandbox' },
      { letter: 'C', text: 'AppExchange package' },
      { letter: 'D', text: 'Data Export Service' }
    ],
    answers: ['D'],
    explanation: "The Data Export Service is the recommended tool for scheduling daily or weekly backups of a Salesforce org to ensure data is properly extracted and stored."
  },
  {
    question: "Sales Managers want to be automatically notified any time there is a change to an Opportunity Close Date and want these changes to be tracked on the Opportunity. Which two configurations should an app builder recommend?",
    options: [
      { letter: 'A', text: 'Enable Feed Tracking on Opportunities.' },
      { letter: 'B', text: 'Create an Opportunity outbound message.' },
      { letter: 'C', text: 'Use a record-triggered flow on Opportunity and a Chatter post action.' },
      { letter: 'D', text: 'Activate Historical Trending for Opportunities.' }
    ],
    answers: ['A', 'C'],
    explanation: "Enable Feed Tracking on Opportunities (A) allows Salesforce to automatically post updates to the Opportunity feed when certain fields (like Close Date) change, which tracks the changes on the Opportunity. Using a record-triggered flow on Opportunity and a Chatter post action (C) allows real-time automated notifications to specific users (e.g., Sales Managers) when the Close Date changes. Outbound messages are used for system-to-system communication, not internal notifications. Historical Trending is for reporting over time, not notifications or tracking."
  },
  {
    question: "DreamHouse Realty (DR) asks for some improvements in case management. They want to enforce process compliance so that cases are unable to be reverted to an earlier case status, and to ensure that certain fields are required when specific case criteria are met. Which solution should an app builder implement to meet these requirements?",
    options: [
      { letter: 'A', text: 'Configure validation rules with help text.' },
      { letter: 'B', text: 'Create dependent picklist fields and set them as required.' },
      { letter: 'C', text: 'Use an approval process to check field criteria are met.' },
      { letter: 'D', text: 'Make the fields required on the page layout.' }
    ],
    answers: ['A'],
    explanation: "To ensure process compliance where cases cannot revert to an earlier status and certain fields are required based on specific case criteria, the recommended solution is to configure validation rules with help text. Validation rules enforce data integrity and business processes by preventing users from saving records if certain conditions are not met. For instance, a validation rule can prevent the status of a case from being changed back to an earlier status and can conditionally require fields based on other field values on the case. Dependent picklists ensure field values depend on another field's value but do not enforce the inability to revert status. Approval processes are used for step-by-step record approval and are not designed to prevent status reversion or conditionally require fields. Making fields required on the page layout ensures they are always required when accessing the record through that layout but does not enforce conditional requirements based on other criteria."
  },
  {
    question: "Universal Containers allows all employees to submit reviews for leadership using a custom object called Review. These Reviews should only be visible to the HR department and the employee who submitted the record. Which three steps should an app builder take to properly control access to Reviews? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Disable Grant Access Using Hierarchies.' },
      { letter: 'B', text: 'Add a Master-Detail (User; field on the Review object.' },
      { letter: 'C', text: 'Create a criteria-based Sharing Rule for the HR Department.' },
      { letter: 'D', text: 'Remove Review Read permission from non-HR Department user Profiles.' },
      { letter: 'E', text: 'Set organization-wide default to Private.' }
    ],
    answers: ['A', 'C', 'E'],
    explanation: "To control access to the Review custom object such that only the HR department and the submitting employee can see the reviews, the organization-wide default (OWD) should be set to Private. By default, Salesforce allows users higher in the role hierarchy to access records owned by users lower in the hierarchy. Since reviews should only be visible to HR and the submitting employee, you need to disable Grant Access Using Hierarchies on the Review object to prevent anyone else in the hierarchy from automatically gaining access. With the OWD set to Private, you'll then need to create a criteria-based sharing rule to ensure that HR users can view the Review records. Profile permissions control the general ability to access the object, while the visibility of specific records is controlled by sharing rules and OWD, so removing Read permission via profiles would block all users, including the submitters."
  },
  {
    question: "Cloud Kicks wants to know the total value of all won Opportunities for Accounts and display it on the record. What type of summary should the app builder use in the roll-up summary field?",
    options: [
      { letter: 'A', text: 'Count' },
      { letter: 'B', text: 'Q Max' },
      { letter: 'C', text: 'Sum' },
      { letter: 'D', text: 'Min' }
    ],
    answers: ['C'],
    explanation: "The app builder should use Sum as the type of summary in the roll-up summary field. A Sum type of summary allows the app builder to calculate the total value of a numeric field from the child records related to a parent record by a master-detail relationship. The app builder can create a roll-up summary field on the Account object that sums the Amount field from the won Opportunities related to each Account. Count calculates the number of child records. Max displays the largest value, and Min displays the smallest value."
  },
  {
    question: "Universal Containers (UC) maintains information for over 2 million assets in an external system. UC needs to access these assets in real-time data in Salesforce and is nearing the data storage limits. What feature could an app builder recommend UC use?",
    options: [
      { letter: 'A', text: 'Data Loader' },
      { letter: 'B', text: 'Salesforce Connect' },
      { letter: 'C', text: 'Salesforce to Salesforce' },
      { letter: 'D', text: 'Data Export Wizard' }
    ],
    answers: ['B'],
    explanation: "The app builder should recommend UC use Salesforce Connect to access the assets in real-time data in Salesforce. Salesforce Connect is a feature that allows users to view, search, and modify data that is stored outside Salesforce, such as in an external system. Salesforce Connect uses external objects and external data sources to integrate data from various sources without copying or synchronizing it. This can help UC access their assets in real-time without consuming data storage limits in Salesforce."
  },
  {
    question: "What are the limitations of Schema Builder when creating a custom object?",
    options: [
      { letter: 'A', text: '"Save" should be clicked each time a new object, field, or relationship is created.' },
      { letter: 'B', text: 'Fields and relationships can be created, but they will be unable to add the fields to the page layout from the canvas.' },
      { letter: 'C', text: 'Relationships can be made to any custom objects, but any relationships to standard objects should be built in Lightning Object Manager.' },
      { letter: 'D', text: 'Custom fields can be added to any custom objects, excluding formula field types.' }
    ],
    answers: ['B'],
    explanation: "Salesforce Schema Builder is a powerful tool for visualizing and creating objects, fields, and relationships in Salesforce, but it has certain limitations when building custom objects. In Schema Builder, while you can create new custom objects, fields, and relationships, you cannot directly add fields to the page layout from within the Schema Builder interface. After creating a field, you need to navigate to the Page Layout Editor to manually place the new field on the layout. You do not need to click Save after each individual creation step; changes can be batched."
  },
  {
    question: "Universal Containers uses a custom object called Projects. When managers assign projects they set a custom field on the project called Estimated Hours. Once set, users should be able to decrease but not increase the value. How can an app builder meet this requirement?",
    options: [
      { letter: 'A', text: 'Create a formula default value for the custom field.' },
      { letter: 'B', text: 'Create a formula held that uses the PREVGROUPVAL function' },
      { letter: 'C', text: 'Create a validation rule that uses the ISCHANGED function' },
      { letter: 'D', text: 'Create a validation rule that uses the PRIOR VALUE function.' }
    ],
    answers: ['D'],
    explanation: "Create a validation rule that uses the PRIORVALUE function is how an app builder can meet the requirement of preventing users from increasing the value of Estimated Hours after it is set. PRIORVALUE returns the previous value of a field. The validation rule can compare the current value and the prior value of Estimated Hours and display an error message if the current value is greater than the prior value."
  },
  {
    question: "Universal Containers uses a custom object called Reviews to capture information generated by interviewers during the candidate process. The Review records are visible to any user that has access to the related custom Candidate record. The VP of Human Resources wants the comment field on the Review to be private to anyone outside of the MR department. How should the app builder meet this requirement?",
    options: [
      { letter: 'A', text: 'Create a page layout with the field and use field-level security to hide the field from all other users.' },
      { letter: 'B', text: 'Create an Apex sharing rule to share the field with users that have "MR\'\' in their role.' },
      { letter: 'C', text: 'Create a sharing rule to share the field with the VP of HR with Role and Subordinates.' },
      { letter: 'D', text: 'Create a page layout with the field for HR users and another page layout without the field for all other users.' }
    ],
    answers: ['A'],
    explanation: "Creating a page layout with the field and using field-level security to hide the field from all other users is how the app builder should meet the requirement of making the comment field on Review private to anyone outside of the HR department. Field-level security can control which profiles can view or edit a specific field on a record. Creating page layouts alone without field-level security does not actually secure the field from reports or API access."
  },
  {
    question: "The app builder needs to change the data types of new custom fields. The app builder is not able to delete and recreate any of the fields, nor modify any apex code. Which data type change will require the app builder to perform the additional steps in order to retain existing functionalities?",
    options: [
      { letter: 'A', text: 'Changing the data type of a field used in lead conversion from number to text' },
      { letter: 'B', text: 'Changing the data type of a field used in an apex class from number to text.' },
      { letter: 'C', text: 'Changing the data type of a field used in a report from a text to an encrypted field' },
      { letter: 'D', text: 'Changing the data type of a field used as an external id from number to text.' }
    ],
    answers: ['B'],
    explanation: "Changing the data type of a field used in an apex class from number to text will require the app builder to perform additional steps in order to retain existing functionalities. This is because changing the data type of a field may affect the apex code that references or manipulates the field value, and may cause compilation errors or unexpected results. The app builder will need to update the apex code to handle the new data type and ensure that the logic and calculations are still correct."
  },
  {
    question: "Ursa Major Solar (UMS) has a custom object where they track Galactic Vendors. The object has four custom fields for the Galactic Vendors's location: Street (Street_c), City (City_c), Planet (Planet_c), Galaxy (Galaxy_c). The UMS's leadership wants these fields to be concatenated into a single formula field on two lines. Which formula fulfills this requirement?",
    options: [
      { letter: 'A', text: 'Street & BR() &\nCity & ", " & Planet & " " & Galaxy' },
      { letter: 'B', text: 'Street\nCity, Planet Galaxy' },
      { letter: 'C', text: 'Street_c & BR() &\nCity_c & ", " & Planet_c & " " & Galaxy__c' },
      { letter: 'D', text: 'Street_c\nCity_c, Planet_c Galaxy_c' }
    ],
    answers: ['C'],
    explanation: "This formula concatenates the four custom fields for the Galactic Vendor's location into a single text value, separated by commas and spaces. The formula also uses the BR function to insert a line break after the second field, creating two lines of text."
  },
  {
    question: "The sales Operations team at AWS Computing deletes accounts for a variety of a reasons. The sales ops director is worried that the Sales team may delete accounts that sales reps are actively selling into. How should the app builder keep accounts with open opportunities from being deleted?",
    options: [
      { letter: 'A', text: 'Create an Apex Trigger on the Account object' },
      { letter: 'B', text: 'Create a validation rule on the Account object.' },
      { letter: 'C', text: 'Remove the delete button on the account layout' },
      { letter: 'D', text: 'Remove the Delete permission from the Sales Rep profile.' }
    ],
    answers: ['B'],
    explanation: "Create a validation rule on the Account object is how the app builder can keep accounts with open opportunities from being deleted. A validation rule can verify data against defined standards before a save or delete operation. By checking if an account has any open opportunities, the validation rule can display an error message if someone tries to delete it."
  },
  {
    question: "Universal Containers (UC) has several large customers that sell their products through dealers. UC identifies and works with a single individual at each customer and at each dealer. Separate bills are sent to each customer and each dealer. These details need to be stored in a format that clearly displays the business entities and their appropriate representatives. How should an app builder Implement these regalements?",
    options: [
      { letter: 'A', text: 'Create a single parent record, add each rep as a contact to the parent account and add each dealer as a child record.' },
      { letter: 'B', text: 'Create both customer and dealer as accounts, create account teams on each account and associate the dealer records with the parent account.' },
      { letter: 'C', text: 'Create a single account record, add each rep as a contact and create a custom dealer object.' },
      { letter: 'D', text: 'Create both customer and dealer as accounts, add each rep as a contact on the corresponding account and create an account hierarchy.' }
    ],
    answers: ['D'],
    explanation: "Creating both customer and dealer as accounts, adding each representative as a contact on the corresponding account, and creating an account hierarchy allows UC to properly structure and link the business entities. This cleanly displays the relationships between the parent customer and its dealers while maintaining separate billing entities and contacts."
  },
  {
    question: "An app builder is creating a custom object called Testimonial__c and wants toconnect Testimonial__c records with both the submitter's Contact record and Account record. If the Account is deleted, the Testimonial__c should also be deleted. If the Contact is deleted, but the Account remains, the Testimonial__c should remain. How should this be accomplished?",
    options: [
      { letter: 'A', text: 'Make both the Contact and Account fields required on the Testimonial__c object and create lookup relationships fromTestimonial__c to Contact and to Account.' },
      { letter: 'B', text: 'Create a master-detail relationship from Testimonial__c to Accountand a lookup relationship from Testimonial__c to Contact.' },
      { letter: 'C', text: 'Make Testimonial__c a junction object between Account and Contact using master-detail relationships.' },
      { letter: 'D', text: 'Create a lookup relationship from Testimonial__c to Account and a master-detail relationship from Testimonial__c to Contact.' }
    ],
    answers: ['B'],
    explanation: 'To connect Testimonial__c records with both the submitter\'s Contact record and Account record, an app builder should create a master-detail relationship from Testimonial__c to Account and a lookup relationship from Testimonial__c to Contact. A master-detail relationship creates a parent-child relationship between two objects and allows for roll-up summary fields, sharing settings, and cascading actions. A lookup relationship creates a loose association between two objects and allows users to relate records from one object to another.'
  },
  {
    question: "When an opportunity is closed date is pushed more than 30days, manager approval is required. An approval process is in place but reps frequently forget to submit for approval to run the process. How can an app builder ensure that these opportunities are submitted into the approval process?",
    options: [
      { letter: 'A', text: 'Change the entry criteria on the approval process to criteria are met and lock the record on initial submission.' },
      { letter: 'B', text: 'Use a validation rule and an email alert to the manager requesting approval.' },
      { letter: 'C', text: 'Submit the record for approval from an automated process.' },
      { letter: 'D', text: 'Give the manager the "API Enabled" permission to permit approval responses by email.' }
    ],
    answers: ['C'],
    explanation: 'To ensure that opportunities are submitted into the approval process when their close date is pushed more than 30 days, an app builder should use an automated process to submit the record for approval. An automated process can be created using tools such as Process Builder or Flow Builder, and it can define the criteria and actions for submitting a record for approval.'
  },
  {
    question: "A new field has been added to the Applicant object that is part of an unmanaged package. A recruiter ran the Position with or without Applicants report and noticed that the new field was missing as an option to add as a column. How should an app builder troubleshoot this issue?",
    options: [
      { letter: 'A', text: 'Adjust the field level security to include in the report type.' },
      { letter: 'B', text: 'Check Allow Reports for the position and applicant objects.' },
      { letter: 'C', text: 'Add the field to the custom report type field layout.' },
      { letter: 'D', text: 'Update the profile with the Manage Public Reports permission.' }
    ],
    answers: ['C'],
    explanation: 'The app builder should add the field to the custom report type field layout to troubleshoot this issue. A custom report type is a type of report that defines which objects and fields are available for reporting. The app builder can customize which fields are included in each custom report type by editing its field layout. If a new field is added to an object that is part of an unmanaged package, it will not be automatically added to the custom report type field layout. The app builder needs to manually add it to make it available as an option to add as a column in reports based on that custom report type. Option A, B, and D are not steps that can troubleshoot this issue.'
  },
  {
    question: "The brokers at DreamHouse Realty (DR) are having an Issue when using the Salesforce mobile app on their (Phones. There are several key fields on the contact record they need access to at a glance. Because of the small screen, they currently have to scroll down the page to view the information. What should the app builder at DR use to configure the Salesforce mobile app to show these key fields at the top of the screen?",
    options: [
      { letter: 'A', text: 'Compact layout' },
      { letter: 'B', text: 'Record Detail component' },
      { letter: 'C', text: 'Object specific action' },
      { letter: 'D', text: 'Mobile navigation' }
    ],
    answers: ['A'],
    explanation: 'Compact layouts control the display of fields in the highlights panel at the top of a record page in both the Salesforce mobile app and Lightning Experience.'
  },
  {
    question: "Universal Containers uses a private sharing model for opportunities. This model CANNOT be changed due to a regional structure A new sales operations team has been created. This team needs to perform analysis on Opportunity data, all should have read arid write access to all Opportunities. What are two recommended solutions for the app builder to give the users appropriate access? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Create a criteria-based sharing rule to all opportunities with the sales operations public group.' },
      { letter: 'B', text: 'Add a manual share for all opportunities with each user on the sales operations team.' },
      { letter: 'C', text: 'Add a permission set with \'View All" and \'Modify All\'\' opportunity permissions enabled.' },
      { letter: 'D', text: 'Create a criteria-based sharing rule to share all opportunities with the sales operations private group' }
    ],
    answers: ['A', 'C'],
    explanation: 'The two recommended solutions for the app builder to give the users appropriate access are creating a criteria based sharing rule to all opportunities with the sales operations public group and adding a permission set with \'View All" and \'Modify All\'\' opportunity permissions enabled. A criteria based sharing rule can grant read and write access to all opportunities that meet certain criteria to a specified group of users. A permission set can grant additional object-level permissions to users without changing their profiles. Option B is incorrect because adding a manual share for all opportunities with each user on the sales operations team is not scalable or maintainable. Option D is incorrect because creating a criteria-based sharing rule to share all opportunities with the sales operations private group is redundant, as private groups are used to manually share records with individual users or other groups.'
  },
  {
    question: "Ursa Major Solar's sales team has been struggling to enter data on mobile since rollout; the team dislikes scrolling through all of the fields to input only the necessary data. How could the app builder solve this with minimal impact to desktop users?",
    options: [
      { letter: 'A', text: 'Filter components by device using Form Factor.' },
      { letter: 'B', text: 'Reorder the fields to make sense for the reps when in the field.' },
      { letter: 'C', text: 'Update the training documentation with better screenshots.' },
      { letter: 'D', text: 'Deselect the phone radio button on the Lightning record page assignment.' }
    ],
    answers: ['A'],
    explanation: 'The best way to solve this problem is to filter components by device using Form Factor. Form Factor is an attribute that can be applied to components on a Lightning record page to control their visibility based on the device type, such as desktop, phone, or tablet. By using Form Factor, the app builder can hide some components that are not relevant for mobile users, such as charts or reports, and show only the components that are necessary for data entry, such as fields or actions. This way, the mobile users do not have to scroll through all the components and can enter data more easily. Reordering the fields may not solve the problem completely, as there may still be too many components on the page for mobile users. Updating the training documentation may not help either, as it does not address the root cause of the problem, which is the layout of the page. Deselecting the phone radio button on the Lightning record page assignment may not be desirable, as it will prevent mobile users from accessing the record page at all, which may affect their productivity and functionality.'
  },
  {
    question: "The sales team receives a list of approximately 800 leads each morning from the marketing team. The marketing team does not know if any of the leads are currently in the pipeline and sends the entire list each morning. Which tool should be used to import these leads into Salesforce while preventing the duplicates from being inserted?",
    options: [
      { letter: 'A', text: 'Dataloaderio' },
      { letter: 'B', text: 'Data Import Wizard' },
      { letter: 'C', text: 'Data Loader' },
      { letter: 'D', text: 'Manual entry' }
    ],
    answers: ['B'],
    explanation: 'To import leads while preventing duplicates: Data Import Wizard is the appropriate tool. The Data Import Wizard in Salesforce includes functionality to check for duplicates based on matching records by certain criteria (like email or lead ID) during the import process, thus preventing duplicate lead records from being created.'
  },
  {
    question: "An app builder at Northern Trad Outfitters created a sandbox template for Accounts, Projects, and Project Milestones to reconfigure some flows for the project management app. Which type of testing environment should the app builder create?",
    options: [
      { letter: 'A', text: 'Developer' },
      { letter: 'B', text: 'Partial Copy' },
      { letter: 'C', text: 'Developer Pro' },
      { letter: 'D', text: 'Scratch Org' }
    ],
    answers: ['B'],
    explanation: 'Partial Copy is the type of testing environment that the app builder should create to use a sandbox template for Accounts, Projects, and Project Milestones. According to the Salesforce documentation, "Partial Copy sandboxes copy your production org\'s configuration (metadata) and some of your production org\'s data as defined by a sandbox template.". Developer, Developer Pro, and Scratch Org are not types of testing environments that support sandbox templates.'
  },
  {
    question: "Containers have the Account object's Organization-Wide Default set to Private. The marketing team owns Accounts; however, they also need to be able to see the sales team's Accounts. Both the sales and marketing teams are in completely different branches of the rote hierarchy. What feature should be used to enable marketing to see sales-owned accounts.",
    options: [
      { letter: 'A', text: 'Public Group' },
      { letter: 'B', text: 'Flow' },
      { letter: 'C', text: 'Workflow' },
      { letter: 'D', text: 'Sharing Rules' }
    ],
    answers: ['D'],
    explanation: 'Sharing rules can be used to extend access to records owned by certain users or roles to other users or roles. In this case, a sharing rule can grant read-only or read/write access to sales-owned accounts to the marketing team.'
  },
  {
    question: "Cloud Kicks received a new requirement to calculate summaries from child objects of a standard object. The team would prefer to solve this declaratively. What are two considerations an app builder should evaluate? Choose 2 answers",
    options: [
      { letter: 'A', text: 'An app builder is unable to change a look up to a master-detail relationship.' },
      { letter: 'B', text: 'An object can have up to two master-detail relationships.' },
      { letter: 'C', text: 'A trigger on save or update can kick off calculations.' },
      { letter: 'D', text: 'A value is required in all records of the lookup field prior to converting to a master-detail relationship.' }
    ],
    answers: ['B', 'D'],
    explanation: 'When Cloud Kicks needs to calculate summaries from child objects of a standard object declaratively, a few key considerations about master-detail relationships come into play. Master-detail relationships are critical in Salesforce when working with roll-up summary fields, which allow you to calculate values from child records. Option B: An object can have up to two master-detail relationships. Salesforce allows an object to have two master-detail relationships. This is important because if you want to aggregate child record data using roll-up summary fields, you need to have a master-detail relationship in place. Each master-detail relationship links a child object to a parent, and you can create roll-up summary fields on the parent object to summarize the child record data. Option D: A value is required in all records of the lookup field prior to converting to a master-detail relationship. One important consideration when converting a lookup relationship into a master-detail relationship is that the lookup field must contain values for all existing child records. This is because master-detail relationships have tighter coupling between parent and child records, and a child cannot exist without a parent in a master-detail scenario. Thus, the field cannot be null during the conversion process. Option A: An app builder can convert a lookup relationship to a master-detail relationship if the above condition (that all lookup fields are populated) is met, so this option is incorrect. Option C: Triggers are part of custom development using Apex, and the question specifies the solution should be declarative. Therefore, triggers would not be a relevant declarative tool for this scenario.'
  },
  {
    question: "Cloud Kicks wants to display 10 key fields at once in a separate section at the top of opportunity records on the desktop. Which component should an app builder add to the record page to enable this functionality?",
    options: [
      { letter: 'A', text: 'Path' },
      { letter: 'B', text: 'Highlights Panel' },
      { letter: 'C', text: 'Custom Lightning Web Component' },
      { letter: 'D', text: 'Accordion' }
    ],
    answers: ['B'],
    explanation: 'Highlights Panel. This is correct because the highlights panel component displays key fields from a record at the top of the page, and it can be configured to show up to 10 fields.'
  },
  {
    question: "A new app builder on the Cloud Kicks team is getting familiar with the data model. They want to see how standard objects and custom objects relate. Which functionality should the app builder use to view these relationships?",
    options: [
      { letter: 'A', text: 'Fields & Relationships' },
      { letter: 'B', text: 'Object Manager' },
      { letter: 'C', text: 'Lightning App Builder' },
      { letter: 'D', text: 'Schema Builder' }
    ],
    answers: ['D'],
    explanation: 'Schema Builder provides a graphical representation of all standard and custom objects and their field and relationship structure. It\'s the best tool for visualizing how data objects are interconnected. Why D (Schema Builder) is correct: Schema Builder provides a dynamic environment for viewing and modifying all the objects and relationships in your organization. You can add new custom objects, fields, and relationships directly in the schema. Why not A (Fields & Relationships): That section displays fields for a single object only, not overall relationships. Why not B (Object Manager): The Object Manager allows object configuration but doesn\'t visually display relationships. Why not C (Lightning App Builder): That tool is for UI layout, not data model visualization.'
  },
  {
    question: "What is the process to upgrade an unmanaged package that is currently installed in production?",
    options: [
      { letter: 'A', text: 'Uninstall the current version and install the new version.' },
      { letter: 'B', text: 'Use the Install Wizard to install the upgrade to production.' },
      { letter: 'C', text: 'Install the new version to a Developer org then deploy to production.' },
      { letter: 'D', text: 'Click the update link on the Installed Packages page.' }
    ],
    answers: ['D'],
    explanation: 'The correct method to upgrade an unmanaged package that is installed in a production environment is to use the update link provided on the Installed Packages page. This process ensures that any modifications or additions in the package are properly integrated without the need to uninstall the previous version, thus preserving existing customizations and data. A: Uninstalling removes all associated data and customizations, which is not advisable. B: The Install Wizard is used for initial installations, not upgrades.'
  },
  {
    question: "Universal Containers uses a private sharing model on Accounts. User A and user B both own Accounts of their own and have both been sent a new account record in an email owned by user C to take a look at. User A is able to open and view the record but user B receives an insufficient privileges error. User A and user B have the same role in the role hierarchy as user. What are the three reasons user A has access but user B is unable to access the record? Choose 3 answers",
    options: [
      { letter: 'A', text: 'User A is on the same account team as user C.' },
      { letter: 'B', text: 'User A and user B have different profiles.' },
      { letter: 'C', text: 'User C has manually shared the record with user A.' },
      { letter: 'D', text: 'User A was granted an additional permission set.' },
      { letter: 'E', text: 'User A is in a public group that has access via a sharing rule.' }
    ],
    answers: ['A', 'C', 'E'],
    explanation: 'The three reasons user A has access but user B is unable to access the record are: User A is on the same account team as user C. Account teams are groups of users who work together on an account. Users who are on an account team can have access to the account and related records owned by other team members. User C has manually shared the record with user A. Manual sharing is a way of granting access to individual users or groups by the record owner or someone above them in the role hierarchy. User A is in a public group that has access via a sharing rule. Public groups are groups of users who can be used to share data or assign permissions. Sharing rules are automatic rules that grant access to groups of users based on certain criteria. Option B and D are not reasons for user A\'s access.'
  },
  {
    question: "DreamHouse Realty wants to import its property records from an external system into Salesforce. The app builder will use an external ID field to house the property ID from the external system. Which two field types are allowed as an external ID?",
    options: [
      { letter: 'A', text: 'Number field' },
      { letter: 'B', text: 'URL field' },
      { letter: 'C', text: 'Test field' },
      { letter: 'D', text: 'Phone field' }
    ],
    answers: ['A', 'C'],
    explanation: 'The allowed field types for an external ID are Number, Text (Test field is likely a typo for Text in the source document), and Email.'
  },
  {
    question: "The Director of customer service wants to receive a notification when a case stays in the '' new'' status for more than four business hours. Which two automation processes should be used to accomplish this? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Escalation rules' },
      { letter: 'B', text: 'Flow Builder' },
      { letter: 'C', text: 'Process Builder' },
      { letter: 'D', text: 'Scheduled Apex' }
    ],
    answers: ['A', 'C'],
    explanation: 'Escalation rules and Process Builder are two automation processes that can be used to send a notification when a case stays in the \'\' new\'\' status for more than four business hours. Escalation rules can define criteria and actions for escalating cases based on time or other factors. Process Builder can create a time-based action that triggers an email alert when the case status is \'\' new\'\' for more than four business hours. Flow Builder and Scheduled Apex are not necessary for this requirement.'
  },
  {
    question: "A Cloud Kicks employee submitted an opportunity for approval by their manager. What will happen if the employee attempts to edit the description field after submission?",
    options: [
      { letter: 'A', text: 'User will be presented with a \'Record Lock\' notification.' },
      { letter: 'B', text: 'User will be able to edit the description field only.' },
      { letter: 'C', text: 'User will be able to edit the name, but unable to edit the description.' },
      { letter: 'D', text: 'User will see the record is now owned by their manager.' }
    ],
    answers: ['A'],
    explanation: 'When a record is submitted for approval, Salesforce automatically locks it, preventing further edits until it is approved, rejected, or recalled. Why A (Record Lock) is correct: When a record is submitted for approval, Salesforce automatically locks the record to prevent users from editing it unless they have \'Modify All Data\' permission or are designated as an approver. Thus, the user will receive a message indicating that the record is locked and cannot be edited. Why not B or C: Once locked, no field (including Description) is editable by the submitter. Why not D: Ownership does not change upon approval submission.'
  },
  {
    question: "Cloud Kicks's management team frequently travels and wants to approve requests from their team on the go via Chatter. Where would an app builder enable this ability?",
    options: [
      { letter: 'A', text: 'Chatter Feed Tracking' },
      { letter: 'B', text: 'Object Settings' },
      { letter: 'C', text: 'Chatter Settings' },
      { letter: 'D', text: 'Approval Process Settings' }
    ],
    answers: ['C'],
    explanation: 'The app builder would enable this ability in Chatter Settings. Chatter Settings is a setup menu that allows an app builder to configure various aspects of Chatter functionality, such as feeds, groups, email notifications, and more. One of the options in Chatter Settings is Enable Approvals via Chatter, which allows users to approve or reject requests from their team via Chatter posts or comments. Option A, B, and D are not places where an app builder would enable this ability.'
  },
  {
    question: "The marketing director is concerned that too many car parts were given away for free last year. Which functionality should be used to ensure all free parts receive the marketing directors' sign-off?",
    options: [
      { letter: 'A', text: 'Stack post' },
      { letter: 'B', text: 'Chatter approval' },
      { letter: 'C', text: 'Automated email message' },
      { letter: 'D', text: 'Approval process' }
    ],
    answers: ['D'],
    explanation: 'An approval process should be used to ensure all free parts receive the marketing director\'s sign-off. Approval processes automate how Salesforce records are approved in your org.'
  },
  {
    question: "Universal Containers uses a custom picklist called Account_Region__c on the Account object. The vice president of sales has asked that the value of this field is visible on Opportunities. How should an app builder create this solution?",
    options: [
      { letter: 'A', text: 'Lookup field' },
      { letter: 'B', text: 'Field-level security' },
      { letter: 'C', text: 'Field history tacking' },
      { letter: 'D', text: 'Cross-object formula field' }
    ],
    answers: ['D'],
    explanation: 'A cross-object formula field is a formula field that references fields from another object. This can be used to display the value of the Account_Region__c field on Opportunities, as long as there is a relationship between the two objects. Option A, B, and C are not relevant for this requirement.'
  },
  {
    question: "An app builder at Cloud Kicks has been working on changes to a custom Shoe Sales app in a sandbox and is ready to deploy their changes to production with a change set. Part of the work included updates to a permission set. What should the app builder take into consideration when deploying the change set to production?",
    options: [
      { letter: 'A', text: 'The deployed permission set will only contain changes related to the change set.' },
      { letter: 'B', text: 'Change to field-level security in the permission set will not be applied.' },
      { letter: 'C', text: 'The deployed permission set will manage with the existing permission set.' },
      { letter: 'D', text: 'The existing permission set will be completely overwritten.' }
    ],
    answers: ['A'],
    explanation: "Reference: Salesforce Help - Permission Sets"
  },
  {
    question: "Universal Containers (UC) has a custom Invoice object and a custom Invoice Line Item object. The Invoice Line-Item object has a lookup relationship to the Invoice. UC would like to convert the lookup relationship to a master-detail relationship but is unable to do so. Which two reasons could be preventing this relationship conversion? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Custom objects are unable to be on the detail side of a master-detail relationship.' },
      { letter: 'B', text: 'There are already two master-detail relationships on the Invoice Line Item.' },
      { letter: 'C', text: 'Invoice Line-Item records exist without having the Invoice lookup field populated.' },
      { letter: 'D', text: 'There is a roll-up summary field on the Invoice object.' }
    ],
    answers: ['B', 'C'],
    explanation: "The two reasons that could be preventing this relationship conversion are that there are already two master-detail relationships on the Invoice Line Item and that Invoice Line Item records exist without having the Invoice lookup field populated. A custom object can have up to two master-detail relationships, so adding another one would exceed the limit. Also, a master-detail relationship requires that the detail records have a value in the master lookup field, so any records with a blank Invoice lookup field would prevent the conversion."
  },
  {
    question: "What option is available to an App Builder when defining an object-specific Create Record custom action? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Pre-Defining field values on the target object.' },
      { letter: 'B', text: 'Redirecting the end user to the detail page of the target object' },
      { letter: 'C', text: 'Specifying the fields and layout of the action.' },
      { letter: 'D', text: 'Allowing the end user to choose the record type' }
    ],
    answers: ['A', 'C'],
    explanation: "The app builder has two options available when defining an object-specific Create Record custom action: Pre-Defining field values on the target object. This means that the app builder can specify default values for certain fields on the target object when creating a new record using the custom action. Specifying the fields and layout of the action. This means that the app builder can choose which fields to include in the action and how they are arranged on the screen. Option B and D are not options available when defining an object-specific Create Record custom action."
  },
  {
    question: "What is one limitation of using schema builder when creating a field?",
    options: [
      { letter: 'A', text: 'Cannot create formula fields.' },
      { letter: 'B', text: 'Cannot see existing relationships between objects.' },
      { letter: 'C', text: 'Cannot add fields to page layouts.' },
      { letter: 'D', text: 'Cannot create lookup relationships.' }
    ],
    answers: ['C'],
    explanation: "One of the limitations when using the Schema Builder for creating fields is: C. Cannot add fields to page layouts. While Schema Builder allows for easy visualization and creation of fields and objects, it does not support placing these fields onto specific page layouts directly from the Schema Builder interface. To place fields on page layouts, you need to: Navigate to Setup → Object Manager → select your object. Click on Page Layouts, choose the appropriate layout, and manually add the newly created fields. This step is necessary to ensure fields are visible and properly arranged on user interfaces. For more details, Salesforce's Schema Builder documentation outlines its capabilities and limitations."
  },
  {
    question: "Ursa Major Solar (UMS) uses Cases to track customer complaints, an Issue__c object to represent known problems with its solar panels, and a Case_Issue__c junction object to relate known problems to customer complaints. Periodically, UMS conducts audits which require the auditing users to view Case_Issue__c records. Which access levels must be configured to allow UMS users to access Case_Issue_c records?",
    options: [
      { letter: 'A', text: 'Read-Only access or issue_c and_issue_c' },
      { letter: 'B', text: 'Read-Only access of Case issue =' },
      { letter: 'C', text: 'Read Only access on Case and case_issue__o' },
      { letter: 'D', text: 'Read-Only access on Case and issue__c' }
    ],
    answers: ['D'],
    explanation: "D). Read-Only access on Case and Issue__c. Users need read-only access to both Case and Issue__c objects to view associated Case_Issue__c junction object records properly. This is because access to junction object records in Salesforce is determined by the user's access levels to the parent records in a relationship. Steps to configure access: Navigate to Setup → Profiles or Permission Sets. Select the profile or permission set of the auditing users. Under Object Settings, adjust the permissions for Case and Issue__c to at least 'Read-Only'. Ensure that users have visibility to the Case_Issue__c object itself. This configuration allows users to view the details of cases and issues as they audit the junction object records."
  },
  {
    question: "Which opportunity standard field is available to be configured directly? Choose 3",
    options: [
      { letter: 'A', text: 'Forecast category' },
      { letter: 'B', text: 'Stage' },
      { letter: 'C', text: 'Lead source' },
      { letter: 'D', text: 'Type' }
    ],
    answers: ['B', 'C', 'D'],
    explanation: "The opportunity standard fields that are available to be configured directly are Stage, Lead Source, and Type. These fields can be modified by editing their picklist values, adding or removing values, or changing their default values. Option A is incorrect because Forecast Category is not a standard field on the opportunity object, but rather a system field that is automatically derived from the Stage field."
  },
  {
    question: "An app builder has created a custom Lightning App and wants to make it available to the internal users at Universal Containers. Which two steps are necessary to accomplish this task? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Add the app to a Visualforce page.' },
      { letter: 'B', text: 'Upload the app to Static Resources.' },
      { letter: 'C', text: 'Create a subdomain using My Domain.' },
      { letter: 'D', text: 'Build a Custom Tab for the app.' }
    ],
    answers: ['C', 'D'],
    explanation: "The app builder needs to do two steps to make the custom Lightning App available to the internal users at Universal Containers: Create a subdomain using My Domain: My Domain is a feature that allows an organization to set up a custom domain name for their Salesforce instance. This is required to use custom Lightning components and apps in Salesforce1. Build a Custom Tab for the app: A custom tab is a tab that displays any custom object or web page in Salesforce. This is required to make the custom Lightning App accessible from the navigation menu or app launcher2. Option A and B are not necessary steps to make the custom Lightning App available to the internal users."
  },
  {
    question: "After universal containers converted qualified leads. Sales reps need to be able to report on converted leads. How should an app builder support for this requirement?",
    options: [
      { letter: 'A', text: 'Enable preserve lead status in the lead conversion settings' },
      { letter: 'B', text: 'Assign the representative view and edit converted leads permission' },
      { letter: 'C', text: 'Ensure the representative has read access to the original lead records' },
      { letter: 'D', text: 'Create a custom report type with converted leads as the primary object' }
    ],
    answers: ['D'],
    explanation: "The solution that an app builder should use to meet this requirement is creating a custom report type with converted leads as the primary object. A custom report type is a template that defines the objects and fields that are available for a report. The app builder can create a custom report type that has converted leads as the primary object and includes fields from related objects, such as accounts, contacts, and opportunities. This way, sales reps can create reports on converted leads and see their related information. Option A is incorrect because enabling preserve lead status in the lead conversion settings does not affect the reporting on converted leads, but rather allows users to retain the original lead status after conversion. Option B is incorrect because assigning the representative view and edit converted leads permission does not affect the reporting on converted leads, but rather allows users to view and edit converted lead records. Option C is incorrect because ensuring the representative has read access to the original lead records does not affect the reporting on converted leads, but rather allows users to view the original lead records."
  },
  {
    question: "Universal Containers wants to streamline its data capture process by linking fields together. They wish to do this so that the available value on dependents fields are driven by value selected on controlling fields. Which consideration supports the stated requirements? Choose 3 answers",
    options: [
      { letter: 'A', text: 'The import wizard only allows value to be imported into a dependent picklist if they match the appropriate controlling field' },
      { letter: 'B', text: 'Custom picklist field can be either controlling or dependent field' },
      { letter: 'C', text: 'Multi select picklist can be dependent picklist but not controlling fields' },
      { letter: 'D', text: 'Standard and custom picklist fields can be dependent fields.' },
      { letter: 'E', text: 'Checkbox fields can be controlling fields but not dependent fields' }
    ],
    answers: ['A', 'B', 'E'],
    explanation: "The import wizard only allows values to be imported into a dependent picklist if they match the appropriate controlling field. This ensures data integrity and prevents invalid values from being imported. Custom picklist fields can be either controlling or dependent fields. This allows the app builder to create custom dependencies between custom picklists. Checkbox fields can be controlling fields but not dependent fields. This allows the app builder to create dependencies based on checkbox values, such as true or false. Multi-select picklist fields can be dependent picklist fields but not controlling fields. This allows the app builder to create dependencies based on multiple values selected in a multi-select picklist field. Standard and custom picklist fields can be dependent fields, but not all standard picklist fields can be controlling fields. Some standard picklist fields, such as Lead Status or Opportunity Stage, cannot be controlling fields because they are used in other processes, such as lead conversion or sales path."
  },
  {
    question: "Universal Containers' app builder has been tasked with replacing workflow rules and Apex triggers with Process Builders where possible. What are two important considerations an app builder should know before the project is started? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Avoid generating infinite loops.' },
      { letter: 'B', text: 'Apex has a different SOQL query limit than Flow.' },
      { letter: 'C', text: 'Create a process for each workflow rule.' },
      { letter: 'D', text: 'Combine actions when possible.' }
    ],
    answers: ['A', 'D'],
    explanation: "Before replacing workflow rules and Apex triggers with Process Builders, the app builder should consider avoiding generating infinite loops and combining actions when possible. Infinite loops can occur when a process updates a record that causes another process to run on the same record, and so on. Combining actions can reduce the number of processes and improve performance and maintainability."
  },
  {
    question: "An app builder wanes to show Groups as the last navigation menu item in the mobile app. However, (he app builder is unable to select Groups as one of the items on the drop-down menu. What could cause this?",
    options: [
      { letter: 'A', text: 'Groups is available in the recent section of the navigation menu.' },
      { letter: 'B', text: 'Groups is included m the Smart Search items butunavailable on the navigation menu.' },
      { letter: 'C', text: 'Groups is unavailable in the selected list for the navigation menu.' },
      { letter: 'D', text: 'Groups is available in the Chatter section of the navigation menu.' }
    ],
    answers: ['D'],
    explanation: "Groups is available in the Chatter section of the navigation menu, not in the selected list for the navigation menu. According to the Salesforce documentation, \"Groups appear in Chatter, not in Navigation Menu.\" Groups is not available in the recent section of the navigation menu, nor is it included in the Smart Search items but unavailable on the navigation menu. Groups is unavailable in the selected list for the navigation menu."
  },
  {
    question: "DreamHouse Realty (DR) has a policy that requires the phone number on Contact to be deleted when the DoNotCall checkbox is checked. What automation tool should the app builder recommend?",
    options: [
      { letter: 'A', text: 'Quick action' },
      { letter: 'B', text: 'Approval process' },
      { letter: 'C', text: 'Validation rule' },
      { letter: 'D', text: 'Workflow rule' }
    ],
    answers: ['D'],
    explanation: "The app builder should recommend a workflow rule to automate this process. A workflow rule is a type of automation tool that can execute actions based on certain criteria. In this case, the workflow rule can have a criterion that evaluates if the DoNotCall checkbox is checked on a Contact record, and then execute a field update action that sets the Phone field to null. Option A, B, and C are not automation tools that can perform this task."
  },
  {
    question: "Universal Containers uses a custom picklist field Account Region on the account record. They want this region to be reflected on all related contact records and stay in sync if the value of this field changes on the Account. How should an app builder meet this requirement?",
    options: [
      { letter: 'A', text: 'Create a picklist field called \'Account Region\' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.' },
      { letter: 'B', text: 'Create a formula field on the Contact object > Set the value of the formula to ISPICKVAL(Account.Account_Region__c).' },
      { letter: 'C', text: 'Create a formula field on the Contact object > Set the value of the formula to TEXT(Account.Account_Region__c).' },
      { letter: 'D', text: 'Create a text field called \'Account Region\' on Contact object > Create a workflow ruleto update this picklist field if the Account Region field on the Account is changed.' }
    ],
    answers: ['C'],
    explanation: "Creating a formula field on the Contact object and setting the value of the formula to TEXT(Account.Account_Region__c) would reflect the region of the related account on the contact record and stay in sync if the value changes on the account. This is the most efficient and maintainable way to meet the requirement. Creating a workflow rule or a picklist field would require additional configuration and complexity."
  },
  {
    question: "Ann app builder has been to display an overdue date that is two months after a tasks due date. Which approach should the app builder take?",
    options: [
      { letter: 'A', text: 'Use process builder and set overdue date equal to Due Date + ((365/12)*2)' },
      { letter: 'B', text: 'Create a formula field using Due Date + 60' },
      { letter: 'C', text: 'Use process builder and set overdue Date equal to Due Date + 60' },
      { letter: 'D', text: 'Create a formula field using the ADDMONTHS () function' }
    ],
    answers: ['D'],
    explanation: "The best way to calculate an overdue date that is two months after a task due date is to use a formula field with the ADDMONTHS() function. This function adds a specified number of months to a date value, and returns a new date value. See [this article] for more information on formula fields."
  },
  {
    question: "The appraisal team at DreamHouse Realty wants to leverage Salesforce mobile app. What are three things an app builder should do to optimize mobile experience? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Use Global Actions to make it easy to perform vital functionality on mobile.' },
      { letter: 'B', text: 'Avoid using default field values so that the user is required to fill in all fields on the screen.' },
      { letter: 'C', text: 'Minimize the amount of formula fields and lookup fields to reduce page load time.' },
      { letter: 'D', text: 'Create individual customized layouts for different phone operating systems.' },
      { letter: 'E', text: 'Put the most important fields in the compact layout so they are easy to find.' }
    ],
    answers: ['A', 'C', 'E'],
    explanation: "The app builder should do three things to optimize mobile experience: Use Global Actions to make it easy to perform vital functionality on mobile: Global actions are actions that allow users to create records or perform tasks from anywhere in Salesforce. They are displayed in various places in Salesforce mobile app, such as action bar, action menu, or publisher. By using global actions, the app builder can make it easy for the appraisal team to perform common tasks on mobile, such as creating a new appraisal record or logging a call. Minimize the amount of formula fields and lookup fields to reduce page load time: Formula fields and lookup fields are types of fields that can affect the performance of Salesforce mobile app. Formula fields are fields that calculate a value based on an expression or formula. Lookup fields are fields that create a relationship between two objects and allow users to select a value from a list of records. Both types of fields can increase the page load time on mobile devices, especially if they are complex or reference many other fields. By minimizing the amount of formula fields and lookup fields, the app builder can optimize the mobile experience for the appraisal team. Put the most important fields in the compact layout so they are easy to find: Compact layouts are layouts that display a record's key information at a glance. They are used in various places in Salesforce mobile app, such as record highlights, list views, related lists, and lookup dialogs. By putting the most important fields in the compact layout, the app builder can ensure that the appraisal team can easily find the information they need on mobile devices. Option B and D are not things that an app builder should do to optimize mobile experience."
  },
  {
    question: "Which two report formats can be used as a source report to configure a reporting snapshot? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Tabular format' },
      { letter: 'B', text: 'Summary format' },
      { letter: 'C', text: 'Joined format' },
      { letter: 'D', text: 'Matrix format' }
    ],
    answers: ['B', 'D'],
    explanation: "For reporting snapshots, the source report must be capable of grouping data, which is necessary for summarizing information at specific intervals. The acceptable formats for a source report in reporting snapshots are: Summary format (B). This format groups rows of data by one or more criteria and can perform calculations such as sum, average, etc., on another column at each group level. Matrix format (D). Similar to the summary format but arranges data in a grid format, allowing summarization by both rows and columns. Tabular (A) and joined (C) formats are not suitable for reporting snapshots. Tabular reports do not include grouped or summarized data, and joined reports involve combining multiple report types, which are not compatible with how reporting snapshots need to structure data. Reference for more information on reporting snapshots and report formats: Reporting Snapshots: https://help.salesforce.com/articleView?id=reports_snapshots.htm&type=5 Report Formats: https://help.salesforce.com/articleView?id=reports_understanding_formats.htm&type=5"
  },
  {
    question: "Cloud Kicks wants to display the number of opportunities that are Closed Won with a Close Date within the last year on the Account detail page. Which tool should an app builder use to implement this?",
    options: [
      { letter: 'A', text: 'Process Builder' },
      { letter: 'B', text: 'Activity Timeline' },
      { letter: 'C', text: 'Roll-Up Summary Field' },
      { letter: 'D', text: 'Workflow Rule' }
    ],
    answers: ['C'],
    explanation: "A roll-up summary field is a field that calculates values from related records. A roll-up summary field can be used to display the number of opportunities that are closed won with a close date within the last year on the account detail page by using a filter criteria on the field."
  },
  {
    question: "Ursa Major Solar wants to create a relationship between the standard Contact object and a custom Solar Project object Contacts potentially be related to multiple Solar Project objects, and a Solar Project can have multiple Contacts associated with it. How should an app builder configure the data model?",
    options: [
      { letter: 'A', text: 'One Master-detail relationship on Conduct and one Master-detail relationship on Solar Project' },
      { letter: 'B', text: 'Two Lookup relationships on a new custom object' },
      { letter: 'C', text: 'One Lookup relationship on Contact and one Lookup relationship on Solar Project' },
      { letter: 'D', text: 'Two Master-detail relationships on a new custom object' }
    ],
    answers: ['C'],
    explanation: "Two Master-detail relationships on a new custom object is how an app builder should configure the data model to create a relationship between Contact and Solar Project objects where each Contact can be related to multiple Solar Project objects, and each Solar Project can have multiple Contacts associated with it. This is an example of a many-to-many relationship that requires a junction object with two master-detail relationships. One Master-detail relationship on Contact and one Master-detail relationship on Solar Project, two Lookup relationships on a new custom object, and one Lookup relationship on Contact and one Lookup relationship on Solar Project are not valid or correct ways to create a many-to-many relationship."
  },
  {
    question: "A recently refreshed partial sandbox at Cloud Kicks has no data In the custom object Shipping. Checking In production, there are two million rows of data in the object. What could be the reason the data Is missing?",
    options: [
      { letter: 'A', text: 'The sandbox was refreshed too early.' },
      { letter: 'B', text: 'The selected objects in the sandbox template.' },
      { letter: 'C', text: 'The Partial sandbox is at capacity.' },
      { letter: 'D', text: 'The sandbox is still populating data.' }
    ],
    answers: ['B'],
    explanation: "The selected objects in the sandbox template. This is correct because a partial sandbox only copies a subset of data from production, and the data to be copied is determined by the sandbox template. If the Shipping object was not selected in the template, then its data would not be copied to the sandbox."
  },
  {
    question: "Cloud Kicks works on an annual subscription model. When a sale rep marks an opportunity as closed won, a new opportunity should automatically be created for the renewal. The contracts team works outside of salesforce but also needs to be notified about closed deals in order to initial the contract process with the customer. Which automation solution would meet these requirements?",
    options: [
      { letter: 'A', text: 'Approval Process' },
      { letter: 'B', text: 'Outbound Message' },
      { letter: 'C', text: 'Validation Rule' },
      { letter: 'D', text: 'Record-triggered flow' }
    ],
    answers: ['D'],
    explanation: "A record-triggered flow can be used to automate actions when a record is created or updated. In this case, a record-triggered flow can be configured to create a new opportunity and send an email to the contracts team when an opportunity is marked as closed won."
  },
  {
    question: "Northern Trail Outfitters (NTO) has created the custom objects Trail and Park in Salesforce to track trails and parks respectively. NTO wants to track the total number of trails a park has on the park record without writing any code. Which two actions should an app builder take to accomplish this requirement? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Use a formula field on the Park record to show the total number of trails.' },
      { letter: 'B', text: 'Use a roll-up summary field on the Park record to show the total number of Trails.' },
      { letter: 'C', text: 'Use a master-detail relationship between the Park and Trail objects.' },
      { letter: 'D', text: 'Use a lookup relationship between the Park and Trail objects.' }
    ],
    answers: ['B', 'C'],
    explanation: 'To track the total number of trails associated with a park without writing code, the correct actions to take are: Use a roll-up summary field on the Park record to show the total number of Trails (B). Roll-up summary fields calculate and display a value in a master record based on the values of fields in a detail record. They are used to count, sum, average, or get the minimum/maximum of values in related detail records. Use a master-detail relationship between the Park and Trail objects (C). Master-detail relationships are necessary for roll-up summary fields as they allow the master object to control certain behaviors of the detail object and summarize data from those detail records. A formula field (A) cannot dynamically count related records unless those records are linked via a master-detail relationship, and it cannot alone handle counts across related records without such a relationship. A lookup relationship (D) does not support roll-up summaries unless combined with additional tools like triggers or third-party apps, which involve coding or extra configuration outside standard object setup.'
  },
  {
    question: "Universal Containers asked the app builder to ensure when an account type changes to 'Past-Customer' the contacts directly related to that account get an updated status of 'ReMarket'. Which automation should the app builder use to accomplish this task?",
    options: [
      { letter: 'A', text: 'Screen flow' },
      { letter: 'B', text: 'Lightning component' },
      { letter: 'C', text: 'Validation rule' },
      { letter: 'D', text: 'Record triggered flow' }
    ],
    answers: ['D'],
    explanation: 'For automatically updating contact statuses when an account type changes: D. Record triggered flow. This type of automation can monitor changes in account types and accordingly update related records, such as contacts. Steps to implement: Navigate to Setup → Flows. Create a new Flow and choose the record-triggered flow type. Configure the flow to trigger when the Account record is updated to \'Past-Customer\'. Add an Update Records element to modify all related contacts, setting their status to \'ReMarket\'. Activate the flow. This automation ensures that contact statuses are updated in real-time when their related account\'s type changes, maintaining data consistency and relevancy.'
  },
  {
    question: "An app builder is creating a Lightning record page and has added Mobile & Lightning Actions to the page layout. What two components could be included on the layout to display the actions? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Highlights panel' },
      { letter: 'B', text: 'Chatter' },
      { letter: 'C', text: 'Activities' },
      { letter: 'D', text: 'Path' }
    ],
    answers: ['A', 'D'],
    explanation: 'The two components that could be included on the layout to display the actions are the Highlights panel and the Path. The Highlights panel is a component that shows key information and actions for a record. It can display up to 10 actions from the Mobile & Lightning Actions section of the page layout. The Path is a component that shows the stages of a process, such as a sales process or a service process. It can display up to 5 actions from the Mobile & Lightning Actions section of the page layout. The Chatter and Activities components do not display actions from the Mobile & Lightning Actions section of the page layout. They display other types of actions, such as posting, commenting, liking, logging a call, creating a task, or sending an email.'
  },
  {
    question: "An app builder has created a new report type but users are unable to select it from the Report Type list when making a new report for records they own. What could be causing this issue?",
    options: [
      { letter: 'A', text: 'Access to the necessary object is unavailable.' },
      { letter: 'B', text: 'The report type is in a status of Deployed.' },
      { letter: 'C', text: 'Access to Create and Customize Reports is disabled.' },
      { letter: 'D', text: 'The report type is in a status of in Development.' }
    ],
    answers: ['D'],
    explanation: 'A report type that is in a status of In Development is not available for users to select when creating a new report. The app builder needs to change the status to Deployed to make it visible to users.'
  },
  {
    question: "Universal Containers conduct evaluations of their sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review. How can these requirement be met?",
    options: [
      { letter: 'A', text: 'Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security' },
      { letter: 'B', text: 'Use a private sharing model granting record access using custom setting; manage field access with page layouts and field level security' },
      { letter: 'C', text: 'Use a private sharing model granting record access using hierarchy; manage field access with field-level security' },
      { letter: 'D', text: 'Use a private sharing model granting record access using custom setting; manage field access with record types and page layouts' }
    ],
    answers: ['C'],
    explanation: 'To ensure that only the sales reps and their manager\'s executive can view the rep\'s evaluation record but the reps should not be able to view the executive comment field on their review, a private sharing model granting record access using hierarchy and field-level security should be used. A private sharing model means that only the owner of a record and users above them in the role hierarchy can view the record by default. Record access can be granted to other users using manual sharing, sharing rules, or Apex sharing. Field-level security controls which fields are visible or editable for different profiles or permission sets.'
  },
  {
    question: "How should an app builder configure access to a contact's Twitter profile for Salesforce mobile app users?",
    options: [
      { letter: 'A', text: 'Add a formula field to the Contact page layout.' },
      { letter: 'B', text: 'Add an AppExchange Lightning Component to the mobile app.' },
      { letter: 'C', text: 'Add the Twitter component to mobile view Lightning pages.' },
      { letter: 'D', text: 'Add a Twitter Quick Action to the mobile navigation.' }
    ],
    answers: ['C'],
    explanation: 'The Twitter component is a standard Lightning component that can be added to mobile view Lightning pages using the Lightning App Builder. It displays a contact\'s Twitter profile and recent tweets.'
  },
  {
    question: "A new app builder on the Cloud Kicks team is getting familiar with relationships in the data model. What functionality would present the app builder a comprehensive view of all relationships in one pi",
    options: [
      { letter: 'A', text: 'Schema Builder' },
      { letter: 'B', text: 'Lightning Object Creator' },
      { letter: 'C', text: 'Object Manager' },
      { letter: 'D', text: 'Lightning Record Page' }
    ],
    answers: ['A'],
    explanation: 'Schema Builder is a tool that presents a comprehensive view of all relationships in one place. It allows app builders to see how objects are connected and create new relationships. Lightning Object Creator, Object Manager, and Lightning Record Page are not tools for viewing relationships, but for creating objects, managing fields, and customizing record pages respectively.'
  },
  {
    question: "Universal Containers (UC) utilizes two custom picklist fields called sales_Organization_c and Pricing_Tier_c. Which validation rule should an app builder use to ensure pricing_Tier_c is required for customers with a Sales_Organization_c value of Canada?",
    options: [
      { letter: 'A', text: "AND(ISPICKVAL(Sales_Organization__c, 'Canada'), ISBLANK(TEXT(Pricing_Tier__c)))" },
      { letter: 'B', text: "ISPICKVAL(Sales_Organization__c, 'Canada') && ISNULL(Pricing_Tier__c)" },
      { letter: 'C', text: "IF(ISPICKVAL(Sales_Organization__c, 'Canada'), ISBLANK(TEXT(Pricing_Tier__c)), TRUE)" },
      { letter: 'D', text: "OR(ISPICKVAL(Sales_Organization__c, 'Canada'), ISBLANK(TEXT(Pricing_Tier__c)))" }
    ],
    answers: ['A'],
    explanation: 'The correct validation rule to ensure pricing_Tier_c is required for customers with a Sales_Organization_c value of Canada is AND(ISPICKVAL(Sales_Organization__c, \'Canada\'), ISBLANK(TEXT(Pricing_Tier__c))).'
  },
  {
    question: "Universal containers wants to display the real time stock price for each account on the account record page. How should an app builder implement this request?",
    options: [
      { letter: 'A', text: 'Add a dynamic report to the page layout' },
      { letter: 'B', text: 'Create a lightning webcomponent' },
      { letter: 'C', text: 'Install a solution from the appexchange' },
      { letter: 'D', text: 'Build a visual flow that users API calls' }
    ],
    answers: ['C'],
    explanation: 'One of the easiest ways to display real-time stock price for each account is to install a solution from the AppExchange, such as Stock Price Lightning Component3. This component can be added to any record page using the Lightning App Builder.'
  },
  {
    question: "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Existing list views that reference the field may be deleted.' },
      { letter: 'B', text: 'Field references will be removed in Visualforce pages' },
      { letter: 'C', text: 'All data should be backed up before converting a text field.' },
      { letter: 'D', text: 'Changing a field type will remove existing field history.' }
    ],
    answers: ['C', 'D'],
    explanation: 'All data should be backed up before converting a text field to a picklist, as some data may be lost or truncated during the conversion. Changing a field type will remove existing field history, as the history tracking values are not converted.'
  },
  {
    question: "The app builder at Ursa Major Solar created a master-detail relationship between a parent object Galaxy__c and child object Star__c. What is the effect of creating this type of relationship if users want to report on Galaxy__c with Star__c?",
    options: [
      { letter: 'A', text: 'A Galaxy__c with Star__c report type will be automatically created.' },
      { letter: 'B', text: 'A Star__c report type with Galaxy__c as a field will be automatically created.' },
      { letter: 'C', text: 'A new custom report type will need to be created for Star__c with lookup fields from Galaxy__c.' },
      { letter: 'D', text: 'A new custom report type will need to be created for Galaxy__c with Star__c.' }
    ],
    answers: ['A'],
    explanation: 'When a master-detail relationship is created between two objects, Salesforce automatically creates a standard report type that allows users to report on the parent and child together. Why A (Galaxy__c with Star__c) is correct: When you create a master-detail relationship, Salesforce automatically creates a primary report type that includes records from both the master and its detail. Therefore, a "Galaxy__c with Star__c" report type is automatically generated, allowing users to create reports showing all child records (Star__c) related to each parent (Galaxy__c). Why not B: The parent-to-child relationship drives the report type. A "Star__c with Galaxy__c" type is not automatically created. Why not C or D: Custom report types are only needed if you want to include additional related objects or modify relationships; Salesforce automatically provides one for master-detail pairs.'
  },
  {
    question: "Universal Containers needs the 18-digit record ID from Opportunity records when exporting data to Excel in order to ensure each record is treated uniquely. What formula should an app builder use to create this new field?",
    options: [
      { letter: 'A', text: 'ISNUMBER(Id)' },
      { letter: 'B', text: 'CASESAFEID(Id)' },
      { letter: 'C', text: 'TEXT(Id)' },
      { letter: 'D', text: 'VALUE(Id)' }
    ],
    answers: ['B'],
    explanation: 'The app builder should use the CASESAFEID(Id) formula to create this new field. The CASESAFEID function returns the 18-digit case-insensitive version of the record ID, which is unique for each record in Salesforce. The 18-digit record ID is useful for exporting data to external systems that require case-sensitive IDs1. Option A, C, and D are not formulas that can return the 18-digit record ID.'
  },
  {
    question: "Ursa Major Solar's service department gets requests for several types of services, such as installation, repair, and maintenance. Service managers need to be able to tell when maintenance was last done on on asset to help determine If they are meeting contract agreements, but the last maintenance date can be difficult to determine when there are many work orders related to the asset. They think it would be helpful to have a field auto-populated on the Asset record when a maintenance work order gets closed. What tool should an app builder recommend to help meet this requirement?",
    options: [
      { letter: 'A', text: 'Visualforce' },
      { letter: 'B', text: 'Roll-up Summary' },
      { letter: 'C', text: 'Apex Trigger' },
      { letter: 'D', text: 'Flow' }
    ],
    answers: ['D'],
    explanation: 'A flow is an application that automates a business process by collecting data and performing operations in your org or an external system. Flows can also manipulate data in your org by creating, updating, deleting, or submitting records for approval. You can use flows to update fields on related records when a certain event occurs, such as closing a work order. In this case, a flow can be used to update the last maintenance date field on the Asset record when a maintenance work order gets closed.'
  },
  {
    question: "Universal Containers wants to create a report to show job applications with or without resumes. What considerations should the app builder be aware of when creating the custom report type?",
    options: [
      { letter: 'A', text: 'An app builder is unable to create custom report types for objects they do not have permissions for.' },
      { letter: 'B', text: 'Once the report type has been deployed it is unable to be deleted.' },
      { letter: 'C', text: 'A primary object selection is locked once the custom report type has been saved.' },
      { letter: 'D', text: 'When a custom or external object is deleted the report type and reports remain but cause an error when the report is run.' }
    ],
    answers: ['C'],
    explanation: 'The primary object selection is locked once the custom report type has been saved. This means that the app builder cannot change the primary object later. The other options are not true.'
  },
  {
    question: "Universal Containers wants to collaborate with its customers within Salesforce and has decided to enable the Allow Customer Invitations in the Chatter settings. Which permission is granted to customers when invited to a Chatter group?",
    options: [
      { letter: 'A', text: 'The ability to interact with members of their groups.' },
      { letter: 'B', text: 'The ability to @mention accounts of which they are a contact.' },
      { letter: 'C', text: 'The ability to invite members to groups of which they are a member.' },
      { letter: 'D', text: 'The ability to request access to public groups.' }
    ],
    answers: ['A'],
    explanation: 'When the Allow Customer Invitations setting is enabled, customers (external users) can be invited to specific Chatter groups as external members, allowing collaboration and communication within those groups only. Why A (The ability to interact with members of their groups) is correct: External users invited to Chatter groups can post, comment, and interact with members of the groups they belong to, but can\'t access information outside those groups. Why not B: External users cannot @mention accounts; they can only mention members of their groups. Why not C: External users cannot invite others to groups - only internal members or group owners can. Why not D: External users cannot request to join public groups unless invited.'
  },
  {
    question: "An app builder at Cloud Kicks created accustom object and related fields in the schema builder. What next steps should the app build take to ensure users can access the new object and fields?",
    options: [
      { letter: 'A', text: 'Create a permission set for access to the object and fields.' },
      { letter: 'B', text: 'Allow reporting for the object and fields.' },
      { letter: 'C', text: 'Assign data types to the fields on the object.' },
      { letter: 'D', text: 'Add the fields to the page layout on the object.' }
    ],
    answers: ['D'],
    explanation: 'The app builder should add the fields to the page layout on the object to ensure users can access the new object and fields. The page layout determines which fields are visible and editable on the record detail page. Option A, B, and C are not necessary for this purpose.'
  },
  {
    question: "An app builder wants to use Process Builder to automate some of the work being done by the sales team. What are three capabilities ofProcess Builder that can improve productivity? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Send an email alert.' },
      { letter: 'B', text: 'Update a related record.' },
      { letter: 'C', text: 'Send an outbound message.' },
      { letter: 'D', text: 'Delete a related record.' },
      { letter: 'E', text: 'Create a child record.' }
    ],
    answers: ['A', 'B', 'E'],
    explanation: 'Send an email alert, update a related record, and create a child record are three capabilities of Process Builder that can improve productivity for the sales team. Process Builder can automate these actions based on criteria or events that occur on records or objects. Send an outbound message and delete a related record are not capabilities of Process Builder, but of other tools such as Workflow Rules or Apex.'
  },
  {
    question: "An app builder wants to create a custom object and 10 fields. What should they use to create the object, fields, and relationships quickly from one place?",
    options: [
      { letter: 'A', text: 'Schema Builder' },
      { letter: 'B', text: 'Developer Console' },
      { letter: 'C', text: 'Manage Field Permissions' },
      { letter: 'D', text: 'Lightning Object Creator' }
    ],
    answers: ['A'],
    explanation: 'To create a custom object along with multiple fields and relationships efficiently from a single interface, the Schema Builder is the ideal tool: A . Schema Builder. This graphical tool provides a drag-and-drop interface for creating and modifying objects and fields in Salesforce, allowing for a visual layout of database schema. Steps to use Schema Builder: Go to Setup → Schema Builder. Drag the \'Object\' element into the schema area to create a new custom object. Define the object\'s properties (e.g., label, API name). Drag field elements like Text, Number, or Lookup into the object to create fields. Configure each field\'s properties according to your requirements. Connect objects via lookup or master-detail relationships by dragging the relationship fields between them. Save the layout to create all elements in Salesforce.'
  },
  {
    question: "Ursa Major Solar wants to provide sales console users with an Incredible experience, with the most-used components easily accessible at all times. What solution can enable reps to see and access these components from anywhere within the app without leaving the pages where the team is working?",
    options: [
      { letter: 'A', text: 'Favorites' },
      { letter: 'B', text: 'Home page' },
      { letter: 'C', text: 'Global actions' },
      { letter: 'D', text: 'Utility bar' }
    ],
    answers: ['D'],
    explanation: 'The best solution to enable reps to see and access the most-used components from anywhere within the app without leaving the page they are working on is Utility bar. This is a footer that can be added to any Lightning app and can contain tools such as history, notes, or softphone. Favorites, home page, and global actions are not solutions that provide access to components from anywhere within the app.'
  },
  {
    question: "A sales manager has noticed that reps continue to input contacts directly in their phone instead of adding them to Salesforce. What should an app builder recommend to ensure the data makes it into Salesforce?",
    options: [
      { letter: 'A', text: 'Enable in-app notifications every time a contact is created.' },
      { letter: 'B', text: 'Allow Salesforce to import Contacts from mobile device Contact lists.' },
      { letter: 'C', text: 'Enable offline create, edit, and delete in Salesforce for Android and iOS.' },
      { letter: 'D', text: 'Allow users to relate a contact to multiple accounts.' }
    ],
    answers: ['C'],
    explanation: 'To ensure sales reps input contacts into Salesforce rather than their personal devices: C . Enable offline create, edit, and delete in Salesforce for Android and iOS. This feature allows sales reps to enter contact information directly into the Salesforce Mobile App even when they are offline, which syncs back to Salesforce once connectivity is restored. Steps to enable offline capabilities: Navigate to Setup → Mobile Administration → Salesforce Mobile App → Offline Settings. Configure offline settings to allow for creating, editing, and deleting records. Ensure that the Contact object is available for offline access. This functionality encourages reps to use Salesforce directly by mitigating connectivity constraints.'
  },
  {
    question: "Ursa Major Solar (UMS) is looking to hire some new employees. UMS wants to allow the same applicant to apply for multiple open positions using a single application. What should an app builder recommend to meet these requirements?",
    options: [
      { letter: 'A', text: 'Create a master-detail relationship on Open_Position__c to Application__c' },
      { letter: 'B', text: 'Create a master-detail relationship held on Applicant__c to Application__c' },
      { letter: 'C', text: 'Create a master-detailrelationship field on Application__c to Open.Position__c' },
      { letter: 'D', text: 'Create a master-detail relationship field on Applicant__c to Apphcabon_c' }
    ],
    answers: ['D'],
    explanation: 'Create a master-detail relationship field on Applicant__c to Application__c is what the app builder should recommend to meet the requirements of allowing the same applicant to apply for multiple open positions using a single application. This will create a many-to-many relationship between Applicant__c and Open_Position__c using Application__c as a junction object. Create a master-detail relationship on Open_Position__c to Application__c, create a master-detail relationship field on Application__c to Open_Position__c, and create a lookup relationship field on Applicant__c to Application__c are not valid or correct ways to create a many-to-many relationship.'
  },
  {
    question: "An App Builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an Opportunity is Won. Which two can satisfy this requirement?",
    options: [
      { letter: 'A', text: 'Use a workflow rule and an outbound message' },
      { letter: 'B', text: 'Use a flow and an outbound message' },
      { letter: 'C', text: 'Use a process and Apex Code' },
      { letter: 'D', text: 'Use a process and an outbound message' }
    ],
    answers: ['A', 'C'],
    explanation: 'Workflow rule and an outbound message or Process Builder and Apex Code are two ways to integrate Salesforce with an external web service. Workflow rule can define criteria and actions for triggering an outbound message, which is an XML message sent to a designated endpoint URL. Process Builder can invoke Apex Code, which is a programming language that can make callouts to external web services using HTTP requests. Flow Builder and an outbound message or Process Builder and an outbound message are not possible combinations.'
  },
  {
    question: "Universal Containers wants some enhancements on its Opportunity page layout to improve efficiency and collaboration. Which two solutions should an app builder suggest to help meet these requirements? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Mark stage dependent fields as required on the Opportunity page layout.' },
      { letter: 'B', text: 'Use two Tabs components to separate record information from activities.' },
      { letter: 'C', text: 'Add a Path component with fields and instructions aligning to stages on the Opportunity.' },
      { letter: 'D', text: 'Set up an approval process requiring manager consent at each stage of the Opportunity.' }
    ],
    answers: ['A', 'C'],
    explanation: 'Marking stage dependent fields as required on the Opportunity page layout is a good solution to improve efficiency and data quality, as it ensures that users enter the necessary information for each stage of the sales process. Adding a Path component with fields and instructions aligning to stages on the Opportunity is another good solution to improve efficiency and collaboration, as it provides guidance and best practices for users to move the Opportunity along the sales cycle. Using two Tabs components to separate record information from activities may not be an optimal solution, as it may reduce the visibility and accessibility of important data. Setting up an approval process requiring manager consent at each stage of the Opportunity may not be a feasible solution, as it may introduce unnecessary delays and complexity in the sales process.'
  },
  {
    question: "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
    options: [
      { letter: 'A', text: 'CASE(Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "/s.gif")' },
      { letter: 'B', text: 'IMAGE(IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif"))), "Priority Flag")' },
      { letter: 'C', text: 'IF (ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority,"High"), "img/samples/flag_red.gif", "/s.gif")))' },
      { letter: 'D', text: 'IMAGE (CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "Priority Flag")' }
    ],
    answers: ['A', 'D'],
    explanation: 'The formula for creating a visual indicator flag on each case based on the case priority should use the IMAGE and CASE functions. The IMAGE function returns an image for a given URL, and the CASE function evaluates an expression and returns a value based on that expression. Option A and D use these functions correctly, while option B and C do not.'
  },
  {
    question: "To increase adoption, Universal Containers is proposing changes to its Salesforce data model to allow easier visibility for sales reps into key metrics. The proposal has three custom objectsrelated to the Account object, one with a master-detail, and two that are not. Each of these objects has 15 fields they would like to summarize on the Account object. What are two considerations for this proposal? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Roll-up summaries allow MAX, MIN, SUM, COUNT, and AVG.' },
      { letter: 'B', text: 'An object can have 20 object references.' },
      { letter: 'C', text: 'An object can have 25 roll-up summaries.' },
      { letter: 'D', text: 'Roll-up summaries are limited to master-detail relationships.' }
    ],
    answers: ['A', 'D'],
    explanation: 'Roll-up summaries allow MAX, MIN, SUM, COUNT, and AVG functions on numeric fields from child records related by a master-detail relationship. Roll-up summaries are limited to master-detail relationships and cannot be used with lookup relationships. An object can have up to 40 roll-up summary fields, not 25. An object can have up to 25 relationship fields (master-detail or lookup), not 20.'
  },
  {
    question: "UC has a requirement that an opportunity should have a field showing the value of its associated account's billing state. This value should not change after the opportunity has been created. Is there a recommended solution to configure this automated behavior?",
    options: [
      { letter: 'A', text: 'Formula field' },
      { letter: 'B', text: 'Apex' },
      { letter: 'C', text: 'Workflow' },
      { letter: 'D', text: 'Roll-up summary field' }
    ],
    answers: ['C'],
    explanation: 'Apex. This is correct because Apex is a programming language that can perform complex logic and manipulate data in Salesforce. Apex can be used to create a trigger on the opportunity object that copies the value of the billing state from the related account record when the opportunity is created, and prevents it from being changed afterwards. The other options are not suitable for this requirement because they either cannot copy data from a related object (formula field, roll-up summary field) or cannot prevent data from being changed (workflow).'
  },
  {
    question: "Ursa Major Solar wants to automate a welcome email to new clients and include a customized survey about their buying experience. An app builder is tasked with this project and has very little time to build the solution from scratch, but still needs to be able to fully customize the solution. What should the app builder do to meet the deadline and custom requirements?",
    options: [
      { letter: 'A', text: 'Work with a developer to create custom Apex code and a Lightning web component survey to meet the criteria,' },
      { letter: 'B', text: 'Use Salesforce flow to build the survey declaratively to meet the criteria and send it to the customer as an email.' },
      { letter: 'C', text: 'Choose a managed package from AppExchange that closely meets the requirements of the project, restricts programmatic development, but allows declarative development' },
      { letter: 'D', text: 'Choose an unmanaged package from Appexchange that closely meets the requirements of the project and allows programmatic development.' }
    ],
    answers: ['B'],
    explanation: 'Given the need to automate a welcome email including a customized survey with customization requirements and a tight timeline, the best approach is: Use Salesforce Flow to build the survey declaratively to meet the criteria and send it to the customer as an email (B). Flow is a powerful tool for automation in Salesforce, allowing the creation of complex workflows and user interactions without needing to write custom code. It can be used to build a survey and integrate it with email services for automated dispatch. Working with a developer to create custom Apex and LWC (A) might meet the criteria but would not align with the limited time frame. Managed (C) and unmanaged packages (D) from AppExchange can provide pre-built solutions, but they may not offer the needed customization or could require more setup time than building directly in Flow.'
  },
  {
    question: "DreamHouse Realty wants to track how many lifts are being installed into customer garages. The To Be Installed custom checkbox field on the custom Lift object should be checked and an external system should be notified via an outbound message the next day when a lift is sold. What automation tool should be used to complete this task?",
    options: [
      { letter: 'A', text: 'Approval process' },
      { letter: 'B', text: 'Workflow' },
      { letter: 'C', text: 'Flow' },
      { letter: 'D', text: 'Process Builder' }
    ],
    answers: ['C'],
    explanation: 'As of the Winter \'24 release, Salesforce introduced the ability to send outbound messages directly from Flow. This makes Flow the best choice for automating the notification to an external system when a lift is sold, fulfilling the need for both checking the custom To Be Installed checkbox and sending the notification the next day. Flow: With this new functionality, Flow is now the most versatile automation tool for this use case. You can: Create a scheduled path that triggers the next day after the lift is sold (e.g., when a record meets the criteria such as the checkbox being checked). Send the outbound message to notify the external system about the lift installation. Perform all of this declaratively, replacing the need for Workflow, which previously was the go-to for outbound messages. Why not Workflow anymore? Although Workflow still supports outbound messages, Flow is the preferred tool now, as Salesforce is deprecating Workflow rules and Process Builder in favor of Flow. Flow also allows for more complex logic and actions, providing flexibility in future-proofing automation.'
  },
  {
    question: "The finance manager at Universal Containers wants to receive a new business notification email each time a new client is won. The sales manager wants to receive a task letting them know to onboard the new client unless it is a top-tier client. Which automation tool should an app builder use to best address all these requests?",
    options: [
      { letter: 'A', text: 'Record-triggered flow' },
      { letter: 'B', text: 'Screen flow' },
      { letter: 'C', text: 'Apex' },
      { letter: 'D', text: 'Approval process' }
    ],
    answers: ['A'],
    explanation: 'Record-triggered flow is the automation tool that the app builder should use to best address all these requests of sending an email to the finance manager and creating a task for the sales manager when a new client is won. According to the Salesforce documentation, "Record-triggered flows automate processes for you. They start when a record is created or updated, or when a platform event occurs.". A record-triggered flow can perform actions such as sending an email alert or creating a record based on criteria or conditions. Screen flow, Apex, and Approval process are not automation tools that can handle all these requests.'
  },
  {
    question: "The CFO of Cloud Kicks needs a way for new vendors to accept terms on agreements for any new major retail store lease before the opportunity can be closed. Which feature should be used to handle this requirement?",
    options: [
      { letter: 'A', text: 'Email Alert' },
      { letter: 'B', text: 'Dynamic Action' },
      { letter: 'C', text: 'Approval Process' },
      { letter: 'D', text: 'Validation Rule' }
    ],
    answers: ['C'],
    explanation: 'An Approval Process is the appropriate feature to manage and enforce that new vendors accept terms on agreements before an opportunity can be closed. This process can be configured to require approvals from designated approvers when certain conditions are met, ensuring that all necessary agreements are in place and validated before proceeding. A: Email Alert cannot enforce acceptance of terms. B: Dynamic Action primarily adjusts the user interface based on field values, not process management.'
  },
  {
    question: "Northern Trail Outfitters wants to change a master-detail relationship on Account to a lookup relationship with a custom object Park. The app builder tries to reconfigure this but is unable to do so. What could be causing this?",
    options: [
      { letter: 'A', text: 'The Account is included in a flow process on the Park object.' },
      { letter: 'B', text: 'The Park object needs at least one Master-Detail field for reporting.' },
      { letter: 'C', text: 'The Account record includes Parks roll-up summary fields.' },
      { letter: 'D', text: 'The park records have existing formulas on the Account.' }
    ],
    answers: ['C'],
    explanation: 'When attempting to change a master-detail relationship to a lookup relationship, Salesforce imposes specific restrictions to maintain data integrity: C . The Account record includes Parks roll-up summary fields. Master-detail relationships allow roll-up summary fields to aggregate data from child records onto the parent record. If any roll-up summary fields are present on the master object (Account in this case) that depend on the detail records (Parks), the relationship cannot be changed to lookup until these roll-up summary fields are removed. To resolve this, follow these steps: Identify and delete all roll-up summary fields on the Account object that reference the Park object. Convert the master-detail relationship to a lookup relationship. Recreate any necessary roll-ups using declarative tools like Process Builder or Flow if needed, as lookups do not support native roll-up summaries.'
  },
  {
    question: "Universal Containers has two types of applicants, hourly and salary. There are separate record types for each. While all members of the human resource department need to be able to view all applicant records, only the hiring Manager and VP of HR should be able to create salary applicant records. What should the app builder recommend to meet this requirement?",
    options: [
      { letter: 'A', text: 'Update the org-wide default to private and create a sharing rule for the role of recruiting manager.' },
      { letter: 'B', text: 'Create a permission set containing the salary record type and assign it to the appropriate users.' },
      { letter: 'C', text: 'Remove "create" permission for the salary applicant object for everyone except the manager and VP.' },
      { letter: 'D', text: 'Configure the hourly record type as the default and instruct non-management users to accept the default record type.' }
    ],
    answers: ['B'],
    explanation: 'A permission set containing the salary record type and assigning it to the appropriate users would allow only those users to create salary applicant records, while still allowing all users to view all applicant records. This is the most granular and flexible way to meet the requirement.'
  },
  {
    question: "The app builder at Northern Trail Outfitters created a report type for opportunities with or without shipments. The operations team wants to see the account rating Information on the report. What should the app builder do to fulfill this request?",
    options: [
      { letter: 'A', text: 'Change the primary object of the custom type to the Account object.' },
      { letter: 'B', text: 'Add the Account Rating field to the opportunity record page.' },
      { letter: 'C', text: 'Use add fields related via lookup with the view set to opportunities.' },
      { letter: 'D', text: 'Change the account/opportunity relationship to a master/detail relationship.' }
    ],
    answers: ['C'],
    explanation: 'Reference: Salesforce Help - Custom Report Types'
  },
  {
    question: "Cloud Kicks has created accustom object called Interests which is joined to Accounts by way of a junction object called Account Interest. What is the impact to users attempting to view an Account and the associated Account Interest records if they are without read access to the Interest object?",
    options: [
      { letter: 'A', text: 'Users will be able to view the Account Interest records and will have read-only access to the Interest records.' },
      { letter: 'B', text: 'Users will be unable to view Account records that have a related Account Interest record.' },
      { letter: 'C', text: 'Users will be unable to view the Account Interest records or the Interest records.' },
      { letter: 'D', text: 'Users will be able to view the Account Interest record, but unable to view the field or any information relating back to the Interest record.' }
    ],
    answers: ['C'],
    explanation: 'Users will be unable to view the Account Interest records or the Interest records because they do not have read access to the Interest object. This is a standard behavior of Salesforce when a user does not have access to a related object.'
  },
  {
    question: "Universal Containers would like to automatically assign a specific permission set to new users. How can this requirement bemet? Choose 2 Answers",
    options: [
      { letter: 'A', text: 'Create an approval process on the User object to assign a permission set' },
      { letter: 'B', text: 'Create a flow on the user object to assign a permission set.' },
      { letter: 'C', text: 'Create a lightning process on the user object to launch a flow.' },
      { letter: 'D', text: 'Create a workflow rule on the User object to assign a permission set.' }
    ],
    answers: ['B', 'C'],
    explanation: 'A flow or a process can be used to assign a permission set to new users. A flow can be triggered by a record change or an invocable action, while a process can launch a flow as an immediate or scheduled action.'
  },
  {
    question: "Ursa Major Solar has a lookup relationship between a custom Galaxy _c object and a custom Star_c object. An app builder wants to create a roll-up summary field that counts the total number of Star_c records related to each Galaxy__c record. How would the current configuration impact the ability to achieve the desired result?",
    options: [
      { letter: 'A', text: 'The roll-up summary can be achieved by creating a formula field on the Galaxy__c object.' },
      { letter: 'B', text: 'The lookup relationship will need to be converted to a master-detail relationship before a roll-up summary field can be created.' },
      { letter: 'C', text: 'The roll-up summary can be achieved by creating a formula field on the Star__c object.' },
      { letter: 'D', text: 'A new custom report type will need to be created for Galaxy__c with Star__c.' }
    ],
    answers: ['B'],
    explanation: 'The lookup relationship will need to be converted to a master-detail relationship because roll-up summary fields require a master-detail relationship. They do not work with lookup relationships.'
  },
  {
    question: "Universal Containers (UC) utilizes two custom picklist fields called sales_Organization_c and Pricing_Tier_c. Which validation rule should an app builder use to ensure pricing_Tier_c is required for customers with a Sales_Organization_c value of Canada?",
    options: [
      { letter: 'A', text: "AND(ISPICKVAL(Sales_Organization__c, 'Canada'), ISBLANK(TEXT(Pricing_Tier__c)))" },
      { letter: 'B', text: "ISPICKVAL(Sales_Organization__c, 'Canada') && ISNULL(Pricing_Tier__c)" },
      { letter: 'C', text: "IF(ISPICKVAL(Sales_Organization__c, 'Canada'), ISBLANK(TEXT(Pricing_Tier__c)), TRUE)" },
      { letter: 'D', text: "OR(ISPICKVAL(Sales_Organization__c, 'Canada'), ISBLANK(TEXT(Pricing_Tier__c)))" }
    ],
    answers: ['A'],
    explanation: 'The correct validation rule to ensure pricing_Tier_c is required for customers with a Sales_Organization_c value of Canada is AND(ISPICKVAL(Sales_Organization__c, \'Canada\'), ISBLANK(TEXT(Pricing_Tier__c))).'
  },
  {
    question: "Universal containers wants to display the real time stock price for each account on the account record page. How should an app builder implement this request?",
    options: [
      { letter: 'A', text: 'Add a dynamic report to the page layout' },
      { letter: 'B', text: 'Create a lightning webcomponent' },
      { letter: 'C', text: 'Install a solution from the appexchange' },
      { letter: 'D', text: 'Build a visual flow that users API calls' }
    ],
    answers: ['C'],
    explanation: 'One of the easiest ways to display real-time stock price for each account is to install a solution from the AppExchange, such as Stock Price Lightning Component3. This component can be added to any record page using the Lightning App Builder.'
  },
  {
    question: "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Existing list views that reference the field may be deleted.' },
      { letter: 'B', text: 'Field references will be removed in Visualforce pages' },
      { letter: 'C', text: 'All data should be backed up before converting a text field.' },
      { letter: 'D', text: 'Changing a field type will remove existing field history.' }
    ],
    answers: ['C', 'D'],
    explanation: 'All data should be backed up before converting a text field to a picklist, as some data may be lost or truncated during the conversion. Changing a field type will remove existing field history, as the history tracking values are not converted.'
  },
  {
    question: "The app builder at Ursa Major Solar created a master-detail relationship between a parent object Galaxy__c and child object Star__c. What is the effect of creating this type of relationship if users want to report on Galaxy__c with Star__c?",
    options: [
      { letter: 'A', text: 'A Galaxy__c with Star__c report type will be automatically created.' },
      { letter: 'B', text: 'A Star__c report type with Galaxy__c as a field will be automatically created.' },
      { letter: 'C', text: 'A new custom report type will need to be created for Star__c with lookup fields from Galaxy__c.' },
      { letter: 'D', text: 'A new custom report type will need to be created for Galaxy__c with Star__c.' }
    ],
    answers: ['A'],
    explanation: 'When a master-detail relationship is created between two objects, Salesforce automatically creates a standard report type that allows users to report on the parent and child together. Why A (Galaxy__c with Star__c) is correct: When you create a master-detail relationship, Salesforce automatically creates a primary report type that includes records from both the master and its detail. Therefore, a "Galaxy__c with Star__c" report type is automatically generated, allowing users to create reports showing all child records (Star__c) related to each parent (Galaxy__c). Why not B: The parent-to-child relationship drives the report type. A "Star__c with Galaxy__c" type is not automatically created. Why not C or D: Custom report types are only needed if you want to include additional related objects or modify relationships; Salesforce automatically provides one for master-detail pairs.'
  },
  {
    question: "universal containers has several large customers that sell their products through dealers. Each customer and dealer have an individual rep who works directly with uc and each is billed separately. How can an app builder implement these requirements?",
    options: [
      { letter: 'A', text: 'Create a single account record, add each rep as a contact and create a custom dealer object' },
      { letter: 'B', text: 'Create both customer and dealer as accounts, add each rep as a contact on the corresponding account and create an account hierarchy.' },
      { letter: 'C', text: 'Create a single parent record, add each rep as a contact to the parent account and add each dealer as a child record' },
      { letter: 'D', text: 'Create both customer and dealer as accounts, create account teams on each account and associate the dealer records with the parent account.' }
    ],
    answers: ['D'],
    explanation: "Creating both customer and dealer as accounts, creating account teams on each account and associating the dealer records with the parent account would allow UC to track each customer and dealer separately, as well as their relationships and reps. Account hierarchy is not suitable for this scenario, as it is used to show the relationships among parent and child accounts within a single company."
  },
  {
    question: "Cloud Kicks Is redefining its entire business process to convert the Manager Notes field from a long text area files. The goal is to encourage managers to be more concise In their comments and stay at 255 characters or less. There is preexisting information In the Manager Notes field that often is well beyond the character limit. What would happen to any existing information if the app builder tries to convert a preexisting long text area field to text area'",
    options: [
      { letter: 'A', text: 'Preexisting information will truncate to the first 255 characters.' },
      { letter: 'B', text: 'Preexisting Information in the field will be completely lost.' },
      { letter: 'C', text: 'Preexisting information will remain even if it was over 255 characters.' },
      { letter: 'D', text: 'Preexisting information will cause an error message to pop up.' }
    ],
    answers: ['C'],
    explanation: "Preexisting information will remain even if it was over 255 characters if the app builder tries to convert a preexisting long text area field to text area. However, users will not be able to edit or save records with more than 255 characters in that field until they reduce the number of characters. Preexisting information will not truncate, be lost, or cause an error message."
  },
  {
    question: "Ursa Major Solar wants to convert the relationship between Galaxy and Star from a lookup relationship to a master-detail relationship so each Galaxy record can be equipped with a rollup summary count of Star records. Which two considerations should be made? Choose 2 answers",
    options: [
      { letter: 'A', text: 'The Star records are all required to have an existing value in their Galaxy field.' },
      { letter: 'B', text: 'The Galaxy object has fewer than two existing master-detail relationships.' },
      { letter: 'C', text: 'The Galaxy object is required to contain existing roll-up summary fields.' },
      { letter: 'D', text: 'The Star object has fewer than two existing master-detail relationships.' }
    ],
    answers: ['A', 'B'],
    explanation: "The two considerations that should be made are: The Star records are all required to have an existing value in their Galaxy field. This is a prerequisite for converting a lookup relationship to a master-detail relationship. A lookup relationship is an optional relationship that links two objects together, but does not enforce referential integrity or cascade delete. A master-detail relationship is a required relationship that links two objects together and enforces referential integrity and cascade delete. To convert a lookup relationship to a master-detail relationship, all child records must have a value in their lookup field that references an existing parent record. The Galaxy object has fewer than two existing master-detail relationships. This is another prerequisite for converting a lookup relationship to a master-detail relationship. An object can have up to two master-detail relationships with other objects and can act as both the parent and child in different relationships. To convert a lookup relationship to a master-detail relationship, the parent object must have fewer than two existing master-detail relationships with other objects. The Galaxy object is required to contain existing roll-up summary fields is not a valid consideration, as it is not related to converting a lookup relationship to a master-detail relationship."
  },
  {
    question: "Cloud Kicks (CK) captures all shipping information in a custom object called Shipments__c. CK's app builder is tasked with creating an approval process to ensure department members can approve all overnight shipments. Where should the app builder route the approval request?",
    options: [
      { letter: 'A', text: 'Hierarchy field' },
      { letter: 'B', text: 'Role' },
      { letter: 'C', text: 'Public group' },
      { letter: 'D', text: 'Queue' }
    ],
    answers: ['C'],
    explanation: "Public group is the best option to route the approval request for overnight shipments. Public groups can include users, roles, or other groups. Queues are used to assign ownership of records to a group of users, not for approval processes. Hierarchy field and role are not flexible enough to include only the department members."
  },
  {
    question: "Sales reps at Cloud Kicks (CK) forget to submit for approval when CK needs orders reviewed before close won. CK wants to automatically submit opportunities into the Secure Commitment Stage to eliminate manual submission. Which three features would meet the business requirements? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Workflow' },
      { letter: 'B', text: 'Process Builder' },
      { letter: 'C', text: 'Apex' },
      { letter: 'D', text: 'Chatter action' },
      { letter: 'E', text: 'Flow' }
    ],
    answers: ['B', 'C', 'E'],
    explanation: "The app builder should use three features to meet the business requirements: Process Builder: This is a type of automation tool that can execute actions based on certain criteria. In this case, the process builder can have a criteria that evaluates if an opportunity is in the Secure Commitment Stage, and then execute an action that submits it for approval. Apex: This is a programming language that allows developers to execute complex logic on the Salesforce platform. Apex can be used to create triggers that run before or after certain events, such as insert, update, delete, or undelete of records. In this case, Apex can be used to create a trigger that runs before an opportunity is updated and submits it for approval if it is in the Secure Commitment Stage. Flow: This is another type of automation tool that can guide users through a series of screens and perform actions based on user input. Flow can also be triggered by certain events, such as when a record is created or updated. In this case, Flow can be used to create a record-triggered flow that runs after an opportunity is updated and submits it for approval if it is in the Secure Commitment Stage. Option A and D are not features that can meet the business requirements."
  },
  {
    question: "Cloud Kicks (CK) keeps track of its shoe inventory in Salesforce. When an order's status is changed to Activated, the inventory for the ordered shoe is reduced. At that point, a SOAP web service on the CK website must be called so that the website is updated to display the correct inventory amount for the shoe. What should an app builder use to communicate to the CK web service when a shoe's inventory has changed?",
    options: [
      { letter: 'A', text: 'After-Save Record-Triggered flow' },
      { letter: 'B', text: 'Before-Save Record-Triggered flow' },
      { letter: 'C', text: 'Process Builder' },
      { letter: 'D', text: 'Workflow rule' }
    ],
    answers: ['A'],
    explanation: "To communicate to the CK web service when a shoe's inventory has changed, an app builder should use an after-save record-triggered flow. An after-save record-triggered flow is a type of flow that runs after a record is saved and can perform actions such as updating related records, sending emails, calling external services, etc. An after-save record-triggered flow can use an Apex action to invoke a SOAP web service using a WSDL file."
  },
  {
    question: "Universal Containers wants sales reps to get permission from their managers before deleting Opportunities, What can be used to meet these requirements?",
    options: [
      { letter: 'A', text: 'Process Builder with Submit for Approval action.' },
      { letter: 'B', text: 'Approval Process with a triggered Flow process.' },
      { letter: 'C', text: 'Approval Process with Time-Dependent Workflow action.' },
      { letter: 'D', text: 'Two-step Approval Process.' }
    ],
    answers: ['D'],
    explanation: "The feature that can be used to meet these requirements is two-step approval process. An approval process defines the steps and criteria for approving records. A two-step approval process requires two levels of approval before a record can be deleted. The app builder can configure an approval process for opportunities that requires sales reps to submit their delete requests for approval from their managers. Option A is incorrect because Process Builder with Submit for Approval action is not a valid feature, as Process Builder cannot submit records for approval. Option B is incorrect because Approval Process with a triggered Flow process is not a valid feature, as Approval Process cannot trigger Flow processes. Option C is incorrect because Approval Process with Time-Dependent Workflow action is not a valid feature, as Approval Process cannot use Time-Dependent Workflow actions."
  },
  {
    question: "Universal Containers wants to give sales managers the ability to quickly provide sign off on an Opportunity via the Opportunity record page when a sales rep has discounted a deal by 20% to 30%. Which two features should be used for this requirement? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Validation Rule' },
      { letter: 'B', text: 'Dynamic Actions' },
      { letter: 'C', text: 'Schema Builder' },
      { letter: 'D', text: 'Approval Process' }
    ],
    answers: ['B', 'D'],
    explanation: "To facilitate quick managerial sign-off on discounted opportunities: B. Dynamic Actions: Allows the display of specific actions on the Opportunity record page based on certain conditions, like the discount percentage. D. Approval Process: Configures a formal sign-off process for records meeting specific criteria, such as discount ranges between 20% to 30%. Steps to set up: Configure an approval process for opportunities where the discount is between 20% and 30%. Use Dynamic Actions to conditionally show the approval action directly on the Opportunity record page based on the discount percentage. This setup allows sales managers to efficiently review and approve discounted deals directly from the Opportunity record page."
  },
  {
    question: "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object. The App Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
    options: [
      { letter: 'A', text: 'The invoice must have at least one Master-Detail field for reporting.' },
      { letter: 'B', text: 'The Account record includes Invoice roll-up summary fields.' },
      { letter: 'C', text: 'The Invoice records have existing values in the Account.' },
      { letter: 'D', text: 'The Account is included in the workflow on the Invoice object.' }
    ],
    answers: ['B'],
    explanation: "The Account record includes Invoice roll-up summary fields. This is correct because roll-up summary fields are only available on the master object in a master-detail relationship, and changing the field type to lookup would delete the roll-up summary fields."
  },
  {
    question: "Cloud Kicks has five years of sales data and would like to track when customers made their first purchase. How should an app builder use a roll-up summary to meet the requirements?",
    options: [
      { letter: 'A', text: 'Create a new roll-up summary field called First Order Date, using Type MIN on the Opportunity Close Date with a filter where IsWon = TRUE.' },
      { letter: 'B', text: 'Create a new date field called First Order Date, create a new Workflow to set the date, and roll up the value with a filter where IsWon = TRUE.' },
      { letter: 'C', text: 'Create a new roll-up summary field called First Order Date, using Type SUM on Opportunity Close Date.' },
      { letter: 'D', text: 'Create a new date field called First Order Date, then create a roll-up summary to update the field using Type MIN.' }
    ],
    answers: ['A'],
    explanation: "The app builder should create a new roll-up summary field called First Order Date, using Type MIN on the Opportunity Close Date with a filter where IsWon = TRUE. A roll-up summary field is a type of field that calculates values from related records and displays them on the parent record. In this case, the app builder can create a roll-up summary field on the Account object that calculates the minimum (earliest) value of the Opportunity Close Date field from the related opportunities where IsWon = TRUE. This will show when customers made their first purchase. Option B, C, and D are not correct ways to use a roll-up summary field to meet the requirement."
  },
  {
    question: "An app builder at Northern Trail Outfitters created a sandbox template for Accounts, Projects, and Project Milestones to reconfigure some flows for the project management app. Which type of testing environment should the app builder create?",
    options: [
      { letter: 'A', text: 'Developer Pro' },
      { letter: 'B', text: 'Partial Copy' },
      { letter: 'C', text: 'Developer' },
      { letter: 'D', text: 'Scratch Org' }
    ],
    answers: ['B'],
    explanation: "A Partial Copy Sandbox is designed for testing and development with a subset of production data based on a sandbox template. Since the question mentions that a sandbox template was created for certain objects (Accounts, Projects, Project Milestones), the environment must support template-based sampling, which only Partial Copy and Full sandboxes do. Developer and Developer Pro sandboxes do not support sandbox templates. Developer and Developer Pro contain metadata only - no data templates or sample data. Scratch Orgs are for source-driven development and are not created from sandbox templates."
  },
  {
    question: "Sales reps at Cloud Kicks (CK) forget to submit for approval when CK needs orders reviewed before close won. CK wants to automatically submit opportunities into the Secure Commitment Stage to eliminate manual submission. Which feature meets the business requirements?",
    options: [
      { letter: 'A', text: 'Record-Triggered flow optimized for Fast Field Updates' },
      { letter: 'B', text: 'Custom button and screen flow' },
      { letter: 'C', text: 'Platform Event-Triggered flow' },
      { letter: 'D', text: 'Record-Triggered flow optimized for Actions and Related Records' }
    ],
    answers: ['D'],
    explanation: "To automate the submission of opportunities into the \"Secure Commitment\" stage and eliminate manual submission for approval, the best feature to use is: Record-Triggered flow optimized for Actions and Related Records (D). This type of flow allows for complex automation that can include submitting records for approval based on specific criteria being met, such as reaching a particular stage in the opportunity lifecycle. It's particularly suitable for handling related record updates and other actions like submissions for approval, which are integral when an opportunity reaches a certain stage. Record-Triggered Flow optimized for Fast Field Updates (A) is focused primarily on quick updates to fields and may not handle the complexity of submission for approval processes adequately. Custom button and screen flow (B) could be used to manually trigger processes but does not automate the submission. Platform Event-Triggered flow (C) is typically used for integrations and reacting to system-wide events, not for standard record lifecycle management."
  },
  {
    question: "Universal Containers expects impacts to operations due to increased demand. The executive team will reach out to current customers and wants to see the number of open cases for the account and parent account. What should an app builder use to display the number of open cases on the account page?",
    options: [
      { letter: 'A', text: 'Flow' },
      { letter: 'B', text: 'Approval Process' },
      { letter: 'C', text: 'Roll-up summary' },
      { letter: 'D', text: 'Cuctom object' }
    ],
    answers: ['C'],
    explanation: "Roll-up summary fields allow an app builder to display a calculation on a master record based on the values of fields in a detail record. In this scenario, they can be used to show the number of open cases directly on the account page."
  },
  {
    question: "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
    options: [
      { letter: 'A', text: 'Standard buttons can be changed on lookup dialogs, list views, and search result layouts' },
      { letter: 'B', text: 'Standard buttons can be overridden with a Visualforce page' },
      { letter: 'C', text: 'Standard buttons that are not available for overrides can still be hidden on page layouts' },
      { letter: 'D', text: 'Standard buttons can be overridden, relocated on the detail page, and relabeled' }
    ],
    answers: ['B', 'C'],
    explanation: "Standard buttons can be overridden with a Visualforce page to provide custom functionality or user interface. For example, you can override the New button on an object to display a custom Visualforce page instead of the standard page layout. Standard buttons that are not available for overrides can still be hidden on page layouts to prevent users from accessing them. For example, you can hide the Delete button on an object to prevent users from deleting records."
  },
  {
    question: "What are two reason to create an unmanaged package? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Distributing open-source projects on the AppExchange.' },
      { letter: 'B', text: 'Publishing an application for sale on the AppExchange' },
      { letter: 'C', text: 'Deploying from a Developer Edition environment' },
      { letter: 'D', text: 'Distributing upgradeable components to another Salesforce org' }
    ],
    answers: ['A', 'C'],
    explanation: "The two reasons to create an unmanaged package are to distribute open-source projects on the AppExchange and to deploy from a Developer Edition environment. An unmanaged package is a collection of components that can be installed in any Salesforce org but cannot be upgraded or controlled by the developer. An unmanaged package can be used to share open-source projects or to deploy components from a Developer Edition environment to another org."
  },
  {
    question: "Sales reps want the ability to see who can view their account records and how the people have access. Which button should the app builder add to the Account page layout to enable this?",
    options: [
      { letter: 'A', text: 'Sharing Hierarchy' },
      { letter: 'B', text: 'New Task' },
      { letter: 'C', text: 'Sharing' },
      { letter: 'D', text: 'Fait' }
    ],
    answers: ['C'],
    explanation: "The \"Sharing\" button should be added to the Account page layout to allow sales reps to view the sharing details of an account record. This button enables users to see how access to the record is granted via roles, groups, and manual sharing. A: Sharing Hierarchy provides a view of the role hierarchy but does not specifically detail record access. B: New Task is unrelated to sharing visibility. D: \"Fait\" is not recognized in Salesforce context as a valid component or feature."
  },
  {
    question: "Cloud Kicks wants to set up a new opportunity approval process and execute various action items based on the initial submission. Which three action types should an app builder use in the approval process?",
    options: [
      { letter: 'A', text: 'Outbound Message' },
      { letter: 'B', text: 'Invocable Flow' },
      { letter: 'C', text: 'Task' },
      { letter: 'D', text: 'Email Alert' },
      { letter: 'E', text: 'Decision Element' }
    ],
    answers: ['A', 'C', 'D'],
    explanation: "When configuring an approval process, the available initial submission actions (triggered when a record is first submitted for approval) include sending notifications, creating tasks, and sending outbound messages. Outbound messages can be configured as approval actions to send information to external systems when a record is submitted or approved. Approval processes can create tasks for users as part of approval actions to ensure follow-up on record changes. Email alerts can be sent automatically when a record is submitted, approved, rejected, or recalled. Invocable Flows are not selectable as approval actions - they are used in Process Builder or Flow itself, not Approval Process configuration. Decision elements are Flow components, not part of the Approval Process action set."
  },
  {
    question: "DreamHouse Realty is building a custom Lightning app to track its expanding solar water collection business. The Lightning app currently contains a custom Lightning record page with standard components. From which two resources should an app builder get custom components to bring into the new Lightning app? Choose 2 answers",
    options: [
      { letter: 'A', text: 'AppExchange' },
      { letter: 'B', text: 'Apex Code' },
      { letter: 'C', text: 'Import Wizard' },
      { letter: 'D', text: 'Visualforce' }
    ],
    answers: ['A', 'B'],
    explanation: "AppExchange and Apex Code are two resources that can provide custom components for a Lightning app. AppExchange is a marketplace where developers can publish and sell their custom components or apps. Apex Code is a programming language that can be used to create custom components or logic for a Lightning app. Import Wizard and Visualforce are not resources for custom components, but tools for data import and web page development respectively."
  },
  {
    question: "Universal Containers has a custom object that holds over 100 fields. The app builder wants to break up the fields into separate tabs on the lightning page. Which Lightning component is most appropriate to fulfill this requirement?",
    options: [
      { letter: 'A', text: 'Highlights panel' },
      { letter: 'B', text: 'Record detail' },
      { letter: 'C', text: 'Field section' },
      { letter: 'D', text: 'Accordian' }
    ],
    answers: ['D'],
    explanation: "The \"Accordion\" Lightning component is designed to break up content into collapsible sections. This component would be suitable for managing the visibility of large numbers of fields by grouping them into separate tabs or sections that can expand and collapse. This makes navigation easier and declutters the interface. Highlights panel is used for displaying key record information at the top of the page and is not designed for managing multiple fields. Record detail displays all fields on a single layout, which does not suit the requirement to break up the fields. Field section does not exist as a standard Lightning component."
  },
  {
    question: "The Recruiting ream at AW Computing captures thejob acceptance and date of hire of a candidate on the Job Application custom object. Once the candidate accepts the recruiter s job offer, the date of hire should be entered and not be changed on subsequent cecord edit. Which validation formula should the app builder use?",
    options: [
      { letter: 'A', text: 'NOT(ISCLANK(Job_Accepted_c)) && ISCHANGED(Hire_Date_c)' },
      { letter: 'B', text: '(ISBLANK(Job_Accepted_c) II NOT(lSCMANGED(Mire_Daie_c))' },
      { letter: 'C', text: 'NOT{IS&lANK(Job_Accepted_c)) II ISCHANGED(Hire_Date_c)' },
      { letter: 'D', text: '(lSBLANK(Job_Accepted_c) && NOT(lSCHANGED(Hire_Date_c))' }
    ],
    answers: ['A'],
    explanation: "NOT(ISBLANK(Job_Accepted__c)) && ISCHANGED(Hire_Date__c) is the validation formula that the app builder should use to meet the requirement of preventing changes to Hire Date after Job Accepted is entered. This formula will return TRUE if Job Accepted is not blank and Hire Date is changed, which will display an error message and prevent saving the record. The other formulas are not correct or valid."
  },
  {
    question: "AW Computing has a custom object for service plans. A service plan needs to be associated to one and only one contact. The support manager noticed if the wrong contact is associated, the reps are unable to change the contact. The app builder already confirmed the user has correct access to the field and there are no validations associated with the service plans. What could be causing the issue?",
    options: [
      { letter: 'A', text: 'The Read Only radio button, Allows users with at least Read access to the Master record to create, edit, or delete related Detail records, is selected.' },
      { letter: 'B', text: 'The Allow reparenting checkbox, Child records can be reparented to other parent records after they are created, is unchecked.' },
      { letter: 'C', text: 'The Read/Write radio button, Allows users with at least Read/Write access to the Master record to create, edit, or delete related Detail records, is selected.' },
      { letter: 'D', text: 'The Allow reparenting checkbox, Child records can be reparented to other parent records after they are created, is checked.' }
    ],
    answers: ['B'],
    explanation: "The issue described occurs due to the settings in the master-detail relationship. Specifically: The Allow reparenting checkbox, Child records can be reparented to other parent records after they are created, is unchecked (B). This setting prevents changing the parent record (contact) of a child record (service plan) once it has been set. If 'Allow reparenting' is unchecked, it restricts the ability to change the associated contact, leading to the issue observed. The other options do not directly address the inability to change the associated contact on a service plan record. The 'Read Only' and 'Read/Write' settings (A and C) pertain to access rights to the detail records based on the master record's access but do not affect the ability to reparent a record."
  },
  {
    question: "DreamHouse Realty wants to make sure an Opportunity has a field Expected_Close_Date_c populated before it is allowed to enter the qualified stage. How should an app builder solution this request?",
    options: [
      { letter: 'A', text: 'Record Type' },
      { letter: 'B', text: 'Validation Rule' },
      { letter: 'C', text: 'Activity History' },
      { letter: 'D', text: 'Page Layout' }
    ],
    answers: ['B'],
    explanation: "A validation rule is a formula that evaluates the data in one or more fields and returns a value of \"True\" or \"False\". Validation rules verify that the data a user enters in a record meets the standards you specify before the user can save the record. In this case, a validation rule can be used to check if the Expected_Close_Date_c field is populated before the Opportunity stage is set to qualified."
  },
  {
    question: "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Currency' },
      { letter: 'B', text: 'Percent' },
      { letter: 'C', text: 'Date' },
      { letter: 'D', text: 'Checkbox' },
      { letter: 'E', text: 'Time' }
    ],
    answers: ['A', 'B', 'D'],
    explanation: "Roll-up summary fields can only be created on master-detail relationships, and they can only calculate numeric fields, such as currency, percent, and number. Date and time fields are not supported for roll-up summary fields. Checkbox fields can be used in roll-up summary filters, but not in the field to aggregate."
  },
  {
    question: "An app builder just added a lookup field to Account from the existing custom object, Box. Which report type is automatically created?",
    options: [
      { letter: 'A', text: 'Boxes with or without Accounts' },
      { letter: 'B', text: 'Accounts with or without Boxes' },
      { letter: 'C', text: 'Boxes with Accounts' },
      { letter: 'D', text: 'Accounts with Boxes' }
    ],
    answers: ['D'],
    explanation: "Upon adding a lookup field to Account from a custom object, Box: D. Accounts with Boxes. Salesforce automatically creates a new report type that reflects the relationship from the perspective of the parent object, in this case, Accounts, showing related Box records. This new report type enables users to create reports that list Accounts along with their associated Boxes, if any."
  },
  {
    question: "Shipments at Cloud Kicks (CK) are created and updated by the warehouse staff in a shipping application. The Information needs to be pushed into Salesforce on a regular basis. CK's app builder creates a custom object called Delivery_c to track the information. How can the app builder prevent creating duplicate delivery records and update the correct existing records when migrating data from the shipping application?",
    options: [
      { letter: 'A', text: 'Use the Import Wizard and match on the tracking number.' },
      { letter: 'B', text: 'Create a unique External ID field and use Dataloader.' },
      { letter: 'C', text: 'Use the Import Wizard and match on the Salesforce ID.' },
      { letter: 'D', text: 'Create a duplicate match rule and use Dataloader.' }
    ],
    answers: ['B'],
    explanation: "Reference: Salesforce Help - External ID"
  },
  {
    question: "Ursa Major Solar is ramping up the sales team to meet increased demand. As part of the short ramp up for these new reps, the manager wants to provide a help guide to enable reps to easily get help where needed during the different sales processes. Which solution should an app builder recommend?",
    options: [
      { letter: 'A', text: 'Flow' },
      { letter: 'B', text: 'Journey Builder' },
      { letter: 'C', text: 'Chatter Publisher' },
      { letter: 'D', text: 'Path' }
    ],
    answers: ['D'],
    explanation: "To provide a help guide to enable reps to easily get help where needed during the different sales processes, an app builder should recommend Path. Path is a component that displays the key fields and guidance for each stage of a sales process on an object's record page. Users can see where they are in the process, update the stage and fields, and access resources such as tips and links."
  },
  {
    question: "Universal Containers assigns system access via permission sets and permission set groups to ensure each user has proper access. One department with varying levels of support staff has five consistent permission sets they require in order to complete their duties. Some higher-level staff have additional permission sets that are only required for them. How should an app builder recommend assigning permission sets to users?",
    options: [
      { letter: 'A', text: 'Utilize the manage assignments button to assign a permission set group and additional individual permission sets to each user.' },
      { letter: 'B', text: 'Utilize the manage assignments button to assign each user with the same set of permission set groups and permission sets.' },
      { letter: 'C', text: 'Utilize the Data Import Wizard to mass update the desired users with their full list of permission sets and permission set groups.' },
      { letter: 'D', text: 'Utilize the Data Loader to mass update the desired users with their full list of permission sets and permission set groups.' }
    ],
    answers: ['A'],
    explanation: "The app builder should recommend utilizing the manage assignments button to assign a permission set group and additional individual permission sets to each user. This way, the app builder can assign the five consistent permission sets to all users in one permission set group, and then assign additional permission sets to higher-level staff as needed. Option B is incorrect because it will not account for the varying levels of support staff and their different permission sets. Option C is incorrect because the Data Import Wizard cannot be used to assign permission sets or permission set groups to users. Option D is incorrect because the Data Loader cannot be used to assign permission set groups to users."
  },
  {
    question: "Due to the complexity of the Universal Containers sandbox release schedule and requirements, it is advised that change sets are used as often as possible to migrate from one environment to another. Which three common items can an app builder move when using a change set? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Web-to-lead' },
      { letter: 'B', text: 'Standard fields' },
      { letter: 'C', text: 'Custom object' },
      { letter: 'D', text: 'Apex class' },
      { letter: 'E', text: 'Custom field' }
    ],
    answers: ['C', 'D', 'E'],
    explanation: "The common items that can be moved using a change set are custom object, Apex class, and custom field. These are metadata components that can be deployed from one environment to another using change sets. Web-to-lead and standard fields are not metadata components that can be moved using change sets."
  },
  {
    question: "Sales manager at universal containers would like to standardize what information sales rep are gathering. Sales rep want recommendations, sales strategies and to know what key fields need to be completed at each step of the sales process on the opportunity record. What feature should an app builder use to provide this functionally?",
    options: [
      { letter: 'A', text: 'Workflow' },
      { letter: 'B', text: 'Path' },
      { letter: 'C', text: 'Chatter feed' },
      { letter: 'D', text: 'Global Action' }
    ],
    answers: ['B'],
    explanation: "The app builder should use the Path feature to provide the functionality that the VP of Sales wants. The Path feature allows an app builder to create a visual representation of the stages in a business process, such as the Opportunity sales process. The app builder can also add key fields, guidance, and resources for each stage to help sales reps gather information and complete tasks. Option A, C, and D are not features that can provide this functionality."
  },
  {
    question: "Universal Containers (UC) delivers purchased containers to remote construction sites. Customers supply UC with crossroads or location markers. Which field type should the app builder use to capture this information?",
    options: [
      { letter: 'A', text: 'Number' },
      { letter: 'B', text: 'Geolocation' },
      { letter: 'C', text: 'Reference' },
      { letter: 'D', text: 'External Lookup' }
    ],
    answers: ['B'],
    explanation: "The best choice for capturing geographic location data, such as crossroads or location markers provided by customers, is the Geolocation field type. This field type stores latitude and longitude data, allowing accurate pinpointing of locations on a map. Geolocation fields are suitable for any application that needs to handle coordinates for mapping and proximity calculations. A: Number field is not specific enough for geographical coordinates. C: Reference fields link to other records, not geographical data."
  },
  {
    question: "AW Computing uses a private sharing model for opportunities. Whenever an opportunity with a type of Service Agreement is created, all users in the Service Manager role should be able to view the opportunity. Which tool should AW Computing use to accomplish this?",
    options: [
      { letter: 'A', text: 'Owner-based sharing rules' },
      { letter: 'B', text: 'Criteria-based sharing rules' },
      { letter: 'C', text: 'Apex sharing rules' },
      { letter: 'D', text: 'Manual sharing' }
    ],
    answers: ['B'],
    explanation: "Criteria-based sharing rules are the best tool to use for automatically sharing records based on specific criteria, such as the opportunity type being \"Service Agreement.\". This rule can share opportunities with all users in a particular role, such as the Service Manager role, when the criteria are met, thereby adhering to the private sharing model while still providing necessary access. A: Owner-based sharing rules focus on the record owner's role or group, not the record type. C: Apex sharing is used for more complex scenarios not easily handled by declarative sharing settings."
  },
  {
    question: "Universal Containers wants to track installation information once it container has been purchased on a custom object. Sales reps should have visibility of all the installations associated with their opportunities. What kind of relationship should this new object have to the Opportunity?",
    options: [
      { letter: 'A', text: 'Lookup' },
      { letter: 'B', text: 'Hierarchical' },
      { letter: 'C', text: 'Master-Detail' },
      { letter: 'D', text: 'Many to Many' }
    ],
    answers: ['A'],
    explanation: "The new object should have a lookup relationship to the Opportunity object. A lookup relationship creates a link between two objects and allows related records to be viewed in a related list. This can be used to track installation information for each opportunity and give sales reps visibility of all the installations associated with their opportunities. Option B, C, and D are not appropriate for this requirement."
  },
  {
    question: "After a deal is closed, Cloud Kicks (CK) wants to assign a user as a customer service manager (CSM) in addition to the account owner and would like a new field to easily track and report which CSM is assigned to the Account. Which solution should an app builder use for this request?",
    options: [
      { letter: 'A', text: 'Multi-select picklist Meld' },
      { letter: 'B', text: 'Picklist field' },
      { letter: 'C', text: 'Lookup field' },
      { letter: 'D', text: 'Text field' }
    ],
    answers: ['C'],
    explanation: "The solution that an app builder should use for this request is a lookup field. A lookup field is a type of relationship field that links two objects together and allows users to select a record from another object. The app builder can create a lookup field on the account object that references the user object and allows users to assign a customer service manager (CSM) to the account. Option A is incorrect because a multi-select picklist field is not suitable for this request, as multi-select picklist fields allow users to select multiple values from a predefined list, not from another object. Option B is incorrect because a picklist field is not suitable for this request, as picklist fields allow users to select one value from a predefined list, not from another object. Option D is incorrect because a text field is not suitable for this request, as text fields allow users to enter any alphanumeric characters, not from another object."
  },
  {
    question: "Ursa Major Solar (UMS) is planning to hire some new employees. UMS wants to allow a job candidate (Job_Candidate__c) to apply for multiple open positions (Open_Position__c) and then be able to view the applications (Application__c) on the job candidate record. UMS also wants to view all the applications for a specific open position.",
    options: [
      { letter: 'A', text: 'Create a master-detail relationship on Open_Position__c to Application__c.' },
      { letter: 'B', text: 'Create a master-detail relationship field on Job_Candidate__c to Application__c.' },
      { letter: 'C', text: 'Create a master-detail relationship field on Application__c to Job_Candidate__c.' },
      { letter: 'D', text: 'Create a master-detail relationship field on Application__c to Open_Position__c.' }
    ],
    answers: ['C', 'D'],
    explanation: "UMS wants each Application to connect both to a Job Candidate and an Open Position, where: One Job Candidate can apply for multiple Open Positions. One Open Position can receive multiple Applications. This is a many-to-many relationship, which in Salesforce is implemented by using a junction object. In this case, Application__c serves as the junction object between Job_Candidate__c and Open_Position__c. Step 1: On Application__c, create a Master-Detail relationship to Job_Candidate__c (Answer C). Step 2: On Application__c, create a Master-Detail relationship to Open_Position__c (Answer D). This setup allows: Viewing all Applications related to a given Job Candidate. Viewing all Applications related to a given Open Position."
  },
  {
    question: "A business user at Universal Containers wants to update an Account directly from an Opportunity record. What should the app builder create to allow the business user to make these edits?",
    options: [
      { letter: 'A', text: 'An update record action with a related record component.' },
      { letter: 'B', text: 'An update record action with a details component' },
      { letter: 'C', text: 'Formula fields displaying the Account fields.' },
      { letter: 'D', text: 'Opportunity fields updated by a process.' }
    ],
    answers: ['A'],
    explanation: "Reference: Salesforce Help - Creating Quick Actions"
  },
  {
    question: "Service Agents are required to confirm a user's identity before providing support information over the phone. Which feature can an app builder use to help agents meet this requirement?",
    options: [
      { letter: 'A', text: 'Guided Action Flows on the record page' },
      { letter: 'B', text: 'Add Path to the top of the Case layout' },
      { letter: 'C', text: 'Include Surveys as a Case related list' },
      { letter: 'D', text: 'Case Validation Rules' }
    ],
    answers: ['A'],
    explanation: "Guided Action Flows (Screen Flows embedded in Lightning record pages) can walk agents through required steps - such as verifying identity - before proceeding. Why A (Guided Action Flows) is correct: Use Guided Action Flows in Lightning App Builder to help agents complete processes in a step-by-step format directly on a record page. The app builder can embed a Screen Flow that prompts the agent to verify identity (e.g., asking security questions), then allows access or marks verification complete. Why not B: Path helps users track record stages, not enforce procedural steps. Why not C: Surveys are used for feedback collection after cases, not real-time identity verification. Why not D: Validation Rules enforce data quality on record save, not process guidance."
  },
  {
    question: "DreamHouse Realty wants to display a weather map component on a Lightning record page when a house is scheduled for a showing. How should the app builder meet the requirement?",
    options: [
      { letter: 'A', text: 'Component visibility' },
      { letter: 'B', text: 'Field-level security' },
      { letter: 'C', text: 'Field-level field' },
      { letter: 'D', text: 'Sharing rules' }
    ],
    answers: ['A'],
    explanation: "To display a weather map component on a Lightning record page conditionally: A . Component visibility should be used. This feature in the Lightning App Builder allows components on a Lightning page to be displayed based on specific criteria, such as field values or user attributes. In this case, the app builder can set the visibility of the weather map component to only appear when a house is scheduled for a showing based on the relevant field values."
  },
  {
    question: "Sales reps at Universal Containers create multiple quotes per opportunity. What automation tool should an app builder recommend to delete rejected quotes?",
    options: [
      { letter: 'A', text: 'Approval process' },
      { letter: 'B', text: 'Validation rule' },
      { letter: 'C', text: 'Workflow rule' },
      { letter: 'D', text: 'Flow' }
    ],
    answers: ['D'],
    explanation: "A flow is a powerful automation tool that can perform complex logic and data manipulation. A flow can be used to delete rejected quotes by using a record-triggered flow that runs when a quote is updated, or by using a scheduled flow that runs at a specified time."
  },
  {
    question: "The DreamHouse Realty (DR) service manager has asked for some improvements in case management to enforce process compliance so that cases are unable to be reverted to an earlier case status, and to ensure that certain fields are required when specific case criteria are met. What solution should an app builder implement to meet these requirements?",
    options: [
      { letter: 'A', text: 'Workflow Rules' },
      { letter: 'B', text: 'Process Builder' },
      { letter: 'C', text: 'A Validation Rules' },
      { letter: 'D', text: 'Activities Component' }
    ],
    answers: ['C'],
    explanation: "A validation rule can enforce process compliance by preventing users from saving records that do not meet certain criteria. In this case, a validation rule can prevent users from reverting to an earlier case status or leaving certain fields blank when specific case criteria are met."
  },
  {
    question: "UVC's CFO has asked that all deals with more than a 40%discount get automatically sent to the VP of Finance. He will review these deals without the sales rep needing to take action. Which two ways can this be accomplished without building code? Choose two answers",
    options: [
      { letter: 'A', text: 'Launch a new approval process that has automatic submission enabled as an initial submission action' },
      { letter: 'B', text: 'Create a new process with a submit for approval action to automatically submit deals for approval' },
      { letter: 'C', text: 'Create a new approval process that has automatic submission enabled in the entry criteria' },
      { letter: 'D', text: 'Launch a flow that uses the submit for approval action to submit deals for approval' }
    ],
    answers: ['A', 'C'],
    explanation: "Launch a new approval process that has automatic submission enabled as an initial submission action, and Create a new approval process that has automatic submission enabled in the entry criteria. These are correct because both options allow the deals to be automatically submitted for approval without requiring any action from the sales rep. The automatic submission can be configured either as an initial submission action or as part of the entry criteria."
  },
  {
    question: "An app builder wants to create a formula field on an Account to include data from related Contacts but is unable to find the relationship in the formula editor. What is a limitation of formulas that could be causing the issue?",
    options: [
      { letter: 'A', text: 'Unable to reference the child records.' },
      { letter: 'B', text: 'A master-detail relationship should be created.' },
      { letter: 'C', text: 'Formula field limit reached on the Account object.' },
      { letter: 'D', text: 'More than 5,000 characters in the formula.' }
    ],
    answers: ['A'],
    explanation: "The app builder wants to create a formula field on an Account to include data from related Contacts but cannot find the relationship in the formula editor. This limitation occurs because formula fields in Salesforce cannot reference child records directly. Option A (Unable to reference the child records): In Salesforce, formula fields can reference parent objects but not child objects. In this case, Contacts are child records of Accounts in a lookup relationship, and Account is the parent. This is why the formula editor does not provide access to the child records (Contacts) from the Account. Option B (A master-detail relationship should be created): While master-detail relationships allow for roll-up summaries, creating a master-detail relationship is not applicable here since the standard Account-Contact relationship is a lookup, and changing it to master-detail is not possible. Option C (Formula field limit reached on the Account object): This would limit the number of formulas but is not the root cause of the issue described. Option D (More than 5,000 characters in the formula): This limit refers to formula field complexity, but it does not explain the inability to reference child records. In summary, the limitation is due to Salesforce not allowing formula fields to reference child records."
  },
  {
    question: "What are two capabilities of Schema Builder? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Editing custom settings' },
      { letter: 'B', text: 'Creating a new record type' },
      { letter: 'C', text: 'Showing selected objects on a page' },
      { letter: 'D', text: 'Viewing page layouts in a new window' }
    ],
    answers: ['A', 'C'],
    explanation: "Schema Builder is a tool that allows app builders to view and modify the data model of their Salesforce org. Some of the capabilities of Schema Builder are: Creating and editing custom objects and fields; Creating and editing relationships between objects; Showing selected objects on a page; Editing custom settings. Schema Builder cannot be used to create a new record type or view page layouts in a new window."
  },
  {
    question: "The developer at Universal Containers wants to test code in a sandbox environment. In order to ensure the code works properly, the sandbox needs to have at least half a gigabyte of data. The sandbox will need to be refreshed after each three-day sprint. What type of sandbox should the App Builder provision to the developer?",
    options: [
      { letter: 'A', text: 'Developer' },
      { letter: 'B', text: 'Full Copy' },
      { letter: 'C', text: 'Developer Pro' },
      { letter: 'D', text: 'Partial Data' }
    ],
    answers: ['D'],
    explanation: "The app builder should provision a Partial Data sandbox to the developer. A Partial Data sandbox can have up to 5 GB of data, which meets the requirement of having at least half a gigabyte of data. A Partial Data sandbox can also be refreshed every 5 days, which meets the requirement of refreshing after each three-day sprint. Option A is incorrect because a Developer sandbox can only have up to 200 MB of data, which does not meet the requirement. Option B is incorrect because a Full Copy sandbox can only be refreshed every 29 days, which does not meet the requirement. Option C is incorrect because a Developer Pro sandbox can only have up to 1 GB of data, which may not be enough for the requirement."
  },
  {
    question: "The convert button on leads should NOT appear until the lead status picklist is set to a qualified. What should an app builder suggest to meet these requirements?",
    options: [
      { letter: 'A', text: 'Picklist dependency, page layouts, record types' },
      { letter: 'B', text: 'Custom button, validation rule, record types' },
      { letter: 'C', text: 'Process builder field update, quick action, record type' },
      { letter: 'D', text: 'Page layout, record types, process builder field update' }
    ],
    answers: ['B'],
    explanation: "A custom button, a validation rule, and record types can be used to meet the requirement of hiding the convert button on leads until the lead status picklist is set to qualified. The custom button can replace the standard convert button and invoke a validation rule that checks the lead status. The record types can be used to assign different page layouts with different buttons for different lead statuses."
  },
  {
    question: "An app builder has deployed a change set from a sandbox to production. There is a long delay in the deployment. What can be causing the delay?",
    options: [
      { letter: 'A', text: 'Profiles are included in the change set.' },
      { letter: 'B', text: 'A field type change is included in the change set.' },
      { letter: 'C', text: 'Dependent fields are included in the change set.' },
      { letter: 'D', text: 'Roles are included in the change set.' }
    ],
    answers: ['B'],
    explanation: "The app builder should know that a field type change is included in the change set and that it can cause a delay in the deployment. A field type change is a change that modifies the data type of an existing field, such as changing a text field to a number field. A field type change can affect many aspects of Salesforce functionality, such as validation rules, formulas, workflows, reports, dashboards, and more. Therefore, deploying a change set that contains a field type change can take longer than usual and require more testing and verification. Option A, C, and D are not changes that can cause a delay in the deployment."
  },
  {
    question: "Northern Trail Outfitters wants the field sales team to only see the accounts that they own Separate North American and European marketing teams should only see accounts m their respective regions. The inside sales team needs to see all accounts in Salesforce. How can this be accomplished?",
    options: [
      { letter: 'A', text: 'Set the Organization-Wide Default to Public for accounts. Create criteria- based sharing rules for each marketing team, and create an Inside Sales Team permission set with the "View Air setting for accounts,' },
      { letter: 'B', text: 'Set the Organization-Wide Default to Public for accounts. Create profiles for each marketing team, and create an Inside Sales Team role that is at the top of the Role Hteran' },
      { letter: 'C', text: 'Set the Organization-Wide Default to Private for accounts. Create criteria- based sharing rules for each marketing team, and create an Inside Sales Team profile with the "View All" setting for accounts.' },
      { letter: 'D', text: 'Set the Organization-Wide Default to Private for accounts. Create permission sets for each marketing team, and create an Inside Sales Team profile with the "View All" setting for accounts.' }
    ],
    answers: ['C'],
    explanation: "Set the Organization-Wide Default to Private for accounts and create criteria-based sharing rules for each marketing team are the actions that can accomplish the requirement of restricting access to accounts based on region and role. Setting the Organization-Wide Default to Private will limit access to accounts to only owners and administrators. Creating criteria-based sharing rules will grant additional access to accounts based on region for each marketing team. Creating an Inside Sales Team profile with the \"View All\" setting for accounts will grant access to all accounts for the inside sales team. Update the Sales profile, update the organization-wide defaults to Public for accounts, create profiles for each marketing team, create permission sets for each marketing team, and create an Inside Sales Team role are not necessary or sufficient actions for this requirement."
  },
  {
    question: "Which three options art availably when activating a Lightning page from the Lightning App Builder? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Assign the page to a combination of apps and profiles.' },
      { letter: 'B', text: 'Assign the page to a combination of apps and permission sets.' },
      { letter: 'C', text: 'Make the page the org default.' },
      { letter: 'D', text: 'Make the page the default homepage for specific roles.' },
      { letter: 'E', text: 'Make the page the default homepage for specific apps.' }
    ],
    answers: ['A', 'C', 'E'],
    explanation: "When activating a Lightning page from the Lightning App Builder, three options are available: Assign the page to a combination of apps and profiles. This option allows users to specify which apps and profiles will see the custom Lightning page instead of the default page. Make the page the org default. This option makes the custom Lightning page the default for all users in the org regardless of their app or profile. Make the page the default homepage for specific apps. This option allows users to set different homepages for different apps in Lightning Experience."
  },
  {
    question: "A sales manager at Cloud Kicks wants the team to spend more time in the field and less time manually entering the information found on the business cards they collect. What should an app builder do to help achieve this goal without sacrificing data quality?",
    options: [
      { letter: 'A', text: 'Research and evaluate data enrichment products on the AppExchange to automate data entry.' },
      { letter: 'B', text: 'Post daily to the Chatter feed any relevant fields that need to be populated.' },
      { letter: 'C', text: 'Use Flow to create a data entry wizard to automate data entry.' },
      { letter: 'D', text: 'Use a combination of workflow rules and formula fields to populate key fields for the sales user.' }
    ],
    answers: ['A'],
    explanation: "The best way to help the sales manager achieve their goal of reducing manual data entry from business cards is to research and evaluate data enrichment products on the AppExchange that can automate data entry. Data enrichment products can scan business cards, extract relevant information, and populate fields in Salesforce records. This can save time, improve data quality, and enhance productivity. Option B, C, and D are not effective solutions for this goal."
  },
  {
    question: "The VP of sales at AW Computing would like a Roll-Up Summary field on the Account object to aggregate the amount of opportunities related to an Account. The app builder is unable to implement this change. Why is the app builder unable to fulfill the request?",
    options: [
      { letter: 'A', text: 'Currency fields are unable to be referenced in Roll-Up Summary fields.' },
      { letter: 'B', text: 'The organization has Advanced Currency Management enabled' },
      { letter: 'C', text: 'Roll-Up Summary fields are unavailable on the Account object.' },
      { letter: 'D', text: 'The default currency is not an active currency in the organization,' }
    ],
    answers: ['B'],
    explanation: "The inability to create a Roll-Up Summary field in this context can be attributed to: B . The organization has Advanced Currency Management enabled. When Advanced Currency Management (ACM) is enabled, it affects how currency data is managed and aggregated, impacting the functionality of roll-up summary fields that involve currency amounts across different records. To address this limitation, consider using custom reporting or a custom solution like a trigger or a scheduled batch class to manually calculate and update the total."
  },
  {
    question: "An app builder wants to create a custom Sync button on Account that will call a Lightning Web Component that connects with an external system. This action should only be available If the custom Status field is set to Ready to Sync. What should an app builder use to add this functionality to an Account record page?",
    options: [
      { letter: 'A', text: 'Formula field' },
      { letter: 'B', text: 'Dynamic action' },
      { letter: 'C', text: 'AppExchange product' },
      { letter: 'D', text: 'Custom link' }
    ],
    answers: ['B'],
    explanation: "Dynamic actions are a new feature that allow app builders to create custom buttons or actions that can call Lightning Web Components and display them conditionally based on field values or other criteria. Formula fields, AppExchange products, and custom links are not able to call Lightning Web Components."
  },
  {
    question: "At Cloud Kicks, when an opportunity close date is delayed by more than 60 days, the manager and the VP of Sales want to review the change. Which two solutions will meet the requirement?",
    options: [
      { letter: 'A', text: 'Build a validation rule that does not allow a user to save the opportunity record.' },
      { letter: 'B', text: 'Create a flow that submits the record for an approval process.' },
      { letter: 'C', text: 'Build an approval process that requires unanimous approval from the manager and VP of Sales.' },
      { letter: 'D', text: 'Create a formula field that calculates if the close date is less than 60 days and then send an email alert.' }
    ],
    answers: ['B', 'C'],
    explanation: "The requirement specifies that when the Close Date is delayed by more than 60 days, the record must go through review by both the manager and VP of Sales - this implies an approval process or Flow-initiated approval is needed, not just a restriction. Why B (Flow) is correct: A Record-Triggered Flow can be configured to detect when the Opportunity Close Date changes by more than 60 days and then automatically submit the record for approval. You can use a flow to automatically submit records for approval when they meet certain criteria. Why C (Approval Process) is correct: The approval process enforces the review by both the manager and VP, ensuring a controlled approval sequence. An approval process automates how records are approved in Salesforce. Each approval process specifies the steps necessary for a record to be approved and who must approve it. You can configure multiple approvers and specify that both must approve (\"Unanimous Approval\"). Why not A (Validation Rule): A validation rule would only block saving but would not trigger a review or approval. Why not D (Formula Field): Formula fields are read-only and cannot trigger workflow or approval actions directly."
  },
  {
    question: "An app builder wants to create a report to compare the number of support cases in each status (New, In-progress, or Closed) and by priority (Critical, High, Medium, or Low). What solution should be used for the report?",
    options: [
      { letter: 'A', text: 'Grouping' },
      { letter: 'B', text: 'Bucket Columns' },
      { letter: 'C', text: 'Custom Report Type' },
      { letter: 'D', text: 'Filters' }
    ],
    answers: ['A'],
    explanation: "The best solution to create a report to compare the number of support cases in each status and by priority is to use grouping. Grouping allows the app builder to summarize data by one or more fields, such as status and priority, and display them in rows and columns. Grouping also enables the app builder to use different chart types, such as stacked bar charts or matrix charts, to visualize the data. Bucket columns are not a suitable solution, as they are used to categorize data into predefined groups, such as high, medium, or low. Custom report types are not a suitable solution, as they are used to define the objects and fields available for a report, not how to display them. Filters are not a suitable solution, as they are used to limit the data shown in a report based on certain criteria, not how to compare them."
  },
  {
    question: "Universal Containers wants to display the real-time stock price for each Account on the Account record page. How should an app builder implement this request?",
    options: [
      { letter: 'A', text: 'Create a Lightning Web Component.' },
      { letter: 'B', text: 'Install a solution from the AppExchange.' },
      { letter: 'C', text: 'Build a Flow that uses API calls.' },
      { letter: 'D', text: 'Use a scheduled Apex job.' }
    ],
    answers: ['A'],
    explanation: "The best way to implement this request is to create a Lightning Web Component that can fetch the real-time stock price from an external API and display it on the Account record page. Installing a solution from the AppExchange may not be feasible as it may not match the exact requirements or may have additional costs. Building a Flow that uses API calls may not be efficient as it may consume API limits and may not be able to update the stock price in real-time. Using a scheduled Apex job may not be suitable as it may not be able to run frequently enough to reflect the real-time stock price."
  },
  {
    question: "At Universal Containers, each admin and developer use a separate developer pro sandbox. Configuration and code are then migrated to a partial data sandbox for combination and initial testing. Once approved the configuration and code are then migrated to a full sandbox for final toad and regression testing before going to production. When should the full sandbox be refreshed?",
    options: [
      { letter: 'A', text: 'After user acceptance testing is complete.' },
      { letter: 'B', text: 'After each push from the partial data sandbox.' },
      { letter: 'C', text: 'After each major release to production.' },
      { letter: 'D', text: 'After a new user is added to production.' }
    ],
    answers: ['C'],
    explanation: "The full sandbox should be refreshed after each major release to production. This way, the full sandbox will have the most updated data and metadata from the production org, and can be used for final load and regression testing before the next release. Option A is incorrect because refreshing the full sandbox after user acceptance testing is complete is not necessary, as user acceptance testing can be done in the partial data sandbox or the production org. Option B is incorrect because refreshing the full sandbox after each push from the partial data sandbox is not necessary, as the full sandbox can receive configuration and code changes from the partial data sandbox without refreshing. Option D is incorrect because refreshing the full sandbox after a new user is added to production is not necessary, as adding a new user does not affect the data and metadata in the full sandbox."
  },
  {
    question: "An app builder wants to create a new field using Schema Builder. Who will get access to the new field by default?",
    options: [
      { letter: 'A', text: 'Standard profiles' },
      { letter: 'B', text: 'No profiles' },
      { letter: 'C', text: 'Internal profiles' },
      { letter: 'D', text: 'All profiles' }
    ],
    answers: ['D'],
    explanation: "All profiles will get access to the new field by default when it is created using Schema Builder. The app builder can modify the field-level security settings later to restrict access for certain profiles. Standard profiles, no profiles, and internal profiles are not correct options."
  },
  {
    question: "Universal Containers wants to track installation information once a container has been purchased on a custom object. Sales reps should have visibility of all the installations associated with their opportunities. Which kind of relationship should this new object have to Opportunity?",
    options: [
      { letter: 'A', text: 'Many to Many' },
      { letter: 'B', text: 'Master-Detail' },
      { letter: 'C', text: 'Hierarchical' },
      { letter: 'D', text: 'Lookup' }
    ],
    answers: ['B'],
    explanation: "The new custom object (\"Installation__c\") must store installation details that are related to an Opportunity. Since each installation should be tied directly to a single opportunity, and inherit ownership and visibility from that opportunity (as per \"sales reps should have visibility\"), a Master-Detail relationship is appropriate. Why B (Master-Detail) is correct: In a master-detail relationship, the detail record inherits the sharing and security settings of its master record. Because Opportunities already have ownership and sharing settings that determine sales reps' visibility, making Installation__c the detail record ensures that sales reps automatically see related installations. The master-detail relationship closely links objects so that the master record controls certain behaviors of the detail record, such as record ownership, sharing, and deletion. Why not A (Many to Many): Many-to-many relationships are only used when multiple records on both sides need to relate (e.g., Opportunities linked to multiple Installations and vice versa). That is not described here. Why not C (Hierarchical): Hierarchical relationships are only available on the User object. Why not D (Lookup): Lookup relationships do not automatically grant visibility or inherit ownership, so sales reps might not see all related installations."
  },
  {
    question: "DreamHouse Realty (DR) employees started using company-owned airplanes for work travel after Ursa Major Solar was acquired. DR executives want to automate the submission travel request forms to enforce the Internal policy. How should an app builder automate travel requests based on these criteria?",
    options: [
      { letter: 'A', text: 'Process Builder' },
      { letter: 'B', text: 'Workflow rule' },
      { letter: 'C', text: 'Approval process' },
      { letter: 'D', text: 'Apex' }
    ],
    answers: ['C'],
    explanation: "Approval process is the best way to automate travel requests based on internal policy. Approval process can define the steps, criteria, and actions for approving records. The app builder can create an approval process for travel requests that requires approval from managers or executives before they are submitted. Workflow rule, Process Builder, and Apex are not suitable for this requirement."
  },
  {
    question: "An app builder received a request to extend record access beyond the organization-wide defaults configured. Which two features satisfy this requirement? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Sharing Rules' },
      { letter: 'B', text: 'Public Groups' },
      { letter: 'C', text: 'Permission Set Groups' },
      { letter: 'D', text: 'Manual Sharing Rules' }
    ],
    answers: ['A', 'D'],
    explanation: "Sharing rules and manual sharing are two features that can extend record access beyond the organization-wide defaults. Sharing rules are automatic rules that grant access to groups of users based on certain criteria, such as role, public group, or territory. Manual sharing is a manual way of granting access to individual users or groups by the record owner or someone above them in the role hierarchy. Option B and C are not features that extend record access."
  },
  {
    question: "Cloud Kicks has a shipment date on each shipment that is sent out. Dispatchers need more details on the day and time the shipment was sent out. The app builder needs to change the current field type that is used from Date to Date/Time. What should the app builder be aware of when it comes to data already in the system?",
    options: [
      { letter: 'A', text: 'The change will be instant' },
      { letter: 'B', text: 'Historical data will be updated to 12:00 timestamp.' },
      { letter: 'C', text: 'The field name will change.' },
      { letter: 'D', text: 'Data loss will be experienced.' }
    ],
    answers: ['B'],
    explanation: "Historical data will be updated to 12:00 timestamp when changing a Date field to Date/Time field. According to the Salesforce documentation, \"When you convert a Date field to Date/Time, Salesforce appends \"12:00\" to existing data in your records.\". The change will not be instant, but will require some time for processing. The field name will not change unless specified by the app builder. Data loss will not be experienced, but data accuracy might be affected."
  },
  {
    question: "Accounts at Universal Containers are currently readable by all users but editable only by their owners. Management wants to designate some Accounts as VIP Accounts. Only Account owners should have read access to these VIP accounts. Which two actions should an app builder take to meet the requirements? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Implement a sharing rule.' },
      { letter: 'B', text: 'Configure a permission set.' },
      { letter: 'C', text: 'Set up an Account Team.' },
      { letter: 'D', text: 'Change organization-wide defaults.' }
    ],
    answers: ['A', 'D'],
    explanation: "The two actions that an app builder should take to meet the requirements are: Implement a sharing rule. A sharing rule is a way to grant additional access to records based on certain criteria, such as record owner, role, profile, or field value. The app builder can create a sharing rule that grants read access to all accounts with the VIP Account field value to all users. This way, all users can view these accounts, but only the owners can edit them. Change organization-wide defaults. Organization-wide defaults are the baseline level of access that users have to records they do not own. The app builder can change the organization-wide default for accounts from Public Read Only to Private. This way, only the owners can view and edit their own accounts, unless additional access is granted by other means, such as sharing rules. Configuring a permission set is not a valid action, as it does not affect record-level access. A permission set is a way to grant additional permissions and access settings to users on top of their profile settings, such as object permissions, field permissions, app permissions, etc. Setting up an Account Team is not a valid action, as it does not restrict record-level access. An Account Team is a way to share an account and its related records with a group of users who work together on the account, such as sales reps, managers, or support agents. An Account Team grants additional access to team members based on predefined roles and access levels."
  },
  {
    question: "universal containers has 20 different workflows on the opportunity object. To ensure that updates are processing properly for all field updates uc has the re-evaluete workflow rules after field change checkbox checked. Recently after adding a new workflow, users have reported receiving errors about workflow limits. What should a app builder look at so address this?",
    options: [
      { letter: 'A', text: 'Talk to a developer about apex code issues' },
      { letter: 'B', text: 'Number of workflows per object limits' },
      { letter: 'C', text: 'Workflows that cause each other to fire back and forth recursively' },
      { letter: 'D', text: 'Workflows on other objects that are being re triggered' }
    ],
    answers: ['C'],
    explanation: "Workflows that cause each other to fire back and forth recursively can result in workflow limits errors. For example, if workflow A updates a field that triggers workflow B, and workflow B updates a field that triggers workflow A, this can create an infinite loop of workflows that exceed the maximum number of workflow time triggers per hour."
  },
  {
    question: "Cloud Kicks works on an annual subscription model. When a sales rep marks an opportunity as closed won, a new opportunity should automatically be created for the renewal. The contracts team works outside of Salesforce but also needs to be notified about closed deals in order to initiate the contract process with the customer. Which automation solution would meet these requirements?",
    options: [
      { letter: 'A', text: 'Approval Process' },
      { letter: 'B', text: 'Validation Rule' },
      { letter: 'C', text: 'Process Builder' },
      { letter: 'D', text: 'Workflow Rule' }
    ],
    answers: ['C'],
    explanation: "The automation solution that would meet these requirements is Process Builder. Process Builder is a tool that can create and update records, send email alerts, submit records for approval, invoke flows, call Apex classes, and post to Chatter based on certain criteria and actions. The app builder can use Process Builder to create a process that starts when an opportunity is marked as closed won, creates a new opportunity record for the renewal with pre-populated fields, and sends an email alert to the contracts team. Option A is incorrect because an approval process is not suitable for this requirement, as approval processes are used to define the steps and criteria for approving records. Option B is incorrect because a validation rule is not suitable for this requirement, as validation rules are used to enforce data quality and prevent users from saving invalid records. Option D is incorrect because a workflow rule is not suitable for this requirement, as workflow rules are considered legacy tools and have limitations compared to Process Builder."
  },
  {
    question: "DreamMouse Realty has a mentorship program that pairs experienced Realtors with new Realtors. Each experienced Realtor can mentor one or several new Realtors, and each new Realtor is required to work with a single experienced Realtor they report to for a probationary period. What type of relationship would an app builder set up to meet this specification?",
    options: [
      { letter: 'A', text: 'Indirect lookup' },
      { letter: 'B', text: 'Many-to-many' },
      { letter: 'C', text: 'Master-detail' },
      { letter: 'D', text: 'Lookup' }
    ],
    answers: ['D'],
    explanation: "Lookup is the type of relationship that would be set up to meet the specification of pairing experienced Realtors with new Realtors. According to the Salesforce documentation, \"A lookup relationship creates a loose association between objects. The lookup field allows users to select a record from another object.\". Indirect lookup is used for junction objects on different platforms. Many-to-many is not a type of relationship, but a result of using junction objects. Master-detail is used for creating parent-child relationships."
  },
  {
    question: "Ursa Major Solar wants to see the Type field from the parent object Galaxy listed on the child recordStar. The app builder is receiving an error stating \"Picklist values are only supported in certain functions\". What formula should an app builder use to achieve the desired result?",
    options: [
      { letter: 'A', text: 'ISPICKVAL(Galaxy__r.Type__c)' },
      { letter: 'B', text: 'VALUE(Galaxy_r.Type__c)' },
      { letter: 'C', text: 'TEXT(Galaxy_r.Type_c)' },
      { letter: 'D', text: 'FIND(Galaxy__r.Type__c)' }
    ],
    answers: ['C'],
    explanation: "TEXT() is a formula function that converts a picklist value to text. This can be used to display the Type field from the parent object Galaxy on the child record Star. ISPICKVAL() is used to check if a picklist value is equal to a specified value. VALUE() is used to convert text that represents a number to a number. FIND() is used to locate one text string within another text string."
  },
  {
    question: "At Universal containers, all US Sales reps should be able to view the US Team dashboard, however, only the US sales directors should be able to see the data in the component and view its source report. How can an app builder ensure the proper access is granted?",
    options: [
      { letter: 'A', text: 'Make the US Sales Director the running user and share the dashboard folder with the role US Sales Rep' },
      { letter: 'B', text: 'Make the dashboard dynamic and give US Sales Reps the view my teams dashboard permission' },
      { letter: 'C', text: 'Share the dashboard folder with roles and subordinates of the US Sales Director and share the report folder with the role of US Sales Director' },
      { letter: 'D', text: 'Share the dashboard with the public group US Sales Reps and share the dashboard source reports folder with the US Sales Director profile' }
    ],
    answers: ['C'],
    explanation: "Sharing the dashboard folder with roles and subordinates of the US Sales Director and sharing the report folder with the role of US Sales Director will ensure that only the US sales directors can see the data in the component and view its source report, while all US sales reps can view the US Team dashboard. Making the US Sales Director the running user will show only his or her data in the component, not the whole team's data. Making the dashboard dynamic will show different data depending on who is viewing it, not based on their role. Sharing the dashboard with the public group US Sales Reps and sharing the dashboard source reports folder with the US Sales Director profile will not prevent other profiles from accessing the reports if they have access to the report folder."
  },
  {
    question: "An app builder wants to limit the number of fields users are required to fill out when creating a new Opportunity. Once they fill out the required fields and save, the full record page with additional fields relevant to the Opportunity type becomes available. How could this be accomplished?",
    options: [
      { letter: 'A', text: 'Make the Opportunity type a required field on the initial Opportunity page layout and use automation to fill in the type field to a record type.' },
      { letter: 'B', text: 'Use different page layouts for Opportunity types based on the user profile.' },
      { letter: 'C', text: 'Once the required fields are populated, use a sharing rule to share the new fields with the user.' },
      { letter: 'D', text: 'Hide additional sections on the page layout and show the users how to manually expand them when they want to fill in the fields in the hidden sections.' }
    ],
    answers: ['A'],
    explanation: "Making the Opportunity type a required field on the initial Opportunity page layout and using automation to fill in the type field to a record type is a way to limit the number of fields users are required to fill out when creating a new Opportunity. This way, the app builder can assign different page layouts for different record types based on the Opportunity type. The other options are not feasible or effective."
  },
  {
    question: "The app builder at Cloud Kicks has created a custom object named Delivery__c to track the details of products shipped to customers. Which two actions should the app builder take to prevent users in the shipping department from deleting delivery records? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Remove the Delete permission from the Shipper profile.' },
      { letter: 'B', text: 'Change the organization-wide default of deliveries to Private.' },
      { letter: 'C', text: 'Remove the delete button from the Delivery page layout.' },
      { letter: 'D', text: 'Use a permission set to remove the Delete permission.' }
    ],
    answers: ['A', 'D'],
    explanation: "Removing the Delete permission from the Shipper profile and using a permission set to remove the Delete permission are both valid ways to prevent users from deleting delivery records. Removing the delete button from the Delivery page layout will not prevent users from deleting records using other methods, such as list views or reports. Changing the organization-wide default of deliveries to Private will not affect the delete permission, but only the sharing settings."
  },
  {
    question: "An app builder installed a custom Lightning component from AppExchange and has deployed My Domain. What should be done next in order to configure the component for use in a record page?",
    options: [
      { letter: 'A', text: 'Edit a record page using Lightning App Builder > Drag the component onto the page.' },
      { letter: 'B', text: 'Edit a record page using the Page Layout editor > Drag the component onto the page.' },
      { letter: 'C', text: 'Edit a record page using the Page Layout editor > Drag the Visualforce component onto the page.' },
      { letter: 'D', text: 'Edit a record page using App Manager > Drag the component onto the page.' }
    ],
    answers: ['A'],
    explanation: "To configure a custom Lightning component for use in a record page, the app builder needs to edit a record page using the Lightning App Builder and drag the component onto the page. The Page Layout editor and the App Manager are not used for this purpose."
  },
  {
    question: "Cloud Kicks wants to display 12 key fields at once in a separate section at the top of opportunity records on the desktop. Which component should an app builder add to the record page to enable this functionality?",
    options: [
      { letter: 'A', text: 'Highlights Panel' },
      { letter: 'B', text: 'Path' },
      { letter: 'C', text: 'Custom Lightning Web Component' },
      { letter: 'D', text: 'Accordion' }
    ],
    answers: ['A'],
    explanation: "The Highlights Panel in the Lightning Record Page displays key fields and record actions prominently at the top of the page, exactly as described in the requirement. Why A (Highlights Panel) is correct: Exact Extract: \"The highlights panel displays important fields and key record actions at the top of the record page in Lightning Experience.\". Why not B: Path is used to visualize progress through stages (e.g., Opportunity Stage), not display multiple fields. Why not C: A custom component is unnecessary since the standard Highlights Panel fulfills the requirement. Why not D: Accordion is used to organize information in collapsible sections, not display key fields at the top."
  },
  {
    question: "Which two features can be used to allow users to access Flows? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Quick Action' },
      { letter: 'B', text: 'Approval Process' },
      { letter: 'C', text: 'Flow Launcher' },
      { letter: 'D', text: 'Apex' }
    ],
    answers: ['A', 'C'],
    explanation: "To allow users access to Flows, Salesforce offers multiple integration points: A. Quick Action: Flows can be initiated from record pages, the app utility bar, or global actions using Quick Actions. This allows users to execute flows relevant to specific records or global processes. C. Flow Launcher: A component available in Lightning App Builder that enables users to start flows directly from a Lightning page."
  },
  {
    question: "Sales reps at Universal Containers create multiple quotes per opportunity. Which automation tool should an app builder recommend to delete rejected quotes?",
    options: [
      { letter: 'A', text: 'Validation rule' },
      { letter: 'B', text: 'Einstein Next Best Action' },
      { letter: 'C', text: 'Approval process' },
      { letter: 'D', text: 'Flow' }
    ],
    answers: ['D'],
    explanation: "The goal is to automatically delete rejected quotes, which requires an automation tool capable of performing record deletion actions. Only Flow can perform this function declaratively. Why D (Flow) is correct: Exact Extract: \"Use Flow Builder to automate complex business processes by collecting data and performing actions such as creating, updating, or deleting records.\". A Record-Triggered Flow can be configured to delete a quote automatically when its status is updated to \"Rejected.\". Why not A (Validation Rule): Validation rules prevent record saving; they don't perform deletions. Why not B (Einstein Next Best Action): NBA recommends actions but does not execute deletions automatically. Why not C (Approval Process): Approval processes manage approvals but don't delete records after rejection."
  },
  {
    question: "When a sales rep submits an account for approval, Universal Containers wants the user to answer additional questions via a popup window to populate additional record fields. What should an app builder use to achieve the desired result?",
    options: [
      { letter: 'A', text: 'Process Builder and Flow' },
      { letter: 'B', text: 'Lightning component and Process Builder' },
      { letter: 'C', text: 'Custom picklist field and Process Builder' },
      { letter: 'D', text: 'Custom button and Flow' }
    ],
    answers: ['D'],
    explanation: "The app builder should use a custom button and Flow to achieve the desired result. A custom button is a button that can invoke custom logic or actions when clicked by a user. A Flow is a type of automation tool that can guide users through a series of screens and perform actions based on user input. In this case, the app builder can create a custom button on the Account object that launches a Flow when clicked by a user. The Flow can display a popup window with questions for the user to answer and populate additional fields on the Account record based on the user input. Option A, B, and C are not tools that can achieve this result."
  },
  {
    question: "At Ursa Major Solar, there is a single Lightning record page for the Celestial Bodies custom object; however, there is a Lightning component the app builder wants to restrict to mobile app users. Which feature on the Lightning app builder should be utilized?",
    options: [
      { letter: 'A', text: 'Chatter feed' },
      { letter: 'B', text: 'Highlights panel' },
      { letter: 'C', text: 'Component visibility filter' },
      { letter: 'D', text: 'Related list quick links' }
    ],
    answers: ['C'],
    explanation: "Component visibility filter is the feature on the Lightning app builder that should be utilized to restrict a Lightning component to mobile app users. According to the Salesforce documentation, \"Use component visibility filters to show or hide components on a record page based on field values or user profile.\". Chatter feed, highlights panel, and related list quick links are not features for controlling component visibility, but standard components that can be added to a record page."
  },
  {
    question: "Cloud Kicks (CK) wants to simultaneously delete a Supplier's record and all Supplier ltem__c records if a partnership ends with a supplier. What solution could an app builder use to meet the requirement?",
    options: [
      { letter: 'A', text: 'Many-to-many' },
      { letter: 'B', text: 'Indirect lookup' },
      { letter: 'C', text: 'Hierarchical' },
      { letter: 'D', text: 'Master-detail' }
    ],
    answers: ['D'],
    explanation: "The solution that an app builder should use to meet this requirement is master-detail relationship. A master-detail relationship is a type of relationship that creates a parent-child relationship between two objects, where the child records inherit the sharing and security settings of their parent record. The app builder can create a master-detail relationship between Supplier__c and SupplierItem__c objects, where Supplier__c is the parent object and SupplierItem__c is the child object. This way, when a Supplier__c record is deleted, all related SupplierItem__c records are also deleted automatically. Option A is incorrect because many-to-many relationship is not suitable for this requirement, as many-to-many relationship allows two objects to be linked in both directions through a junction object, but does not support cascading delete. Option B is incorrect because indirect lookup relationship is not suitable for this requirement, as indirect lookup relationship allows an external object to link with another object using an external ID field, but does not support cascading delete. Option C is incorrect because hierarchical relationship is not suitable for this requirement, as hierarchical relationship allows users to use a lookup field that links an object with itself, but does not support cascading delete."
  },
  {
    question: "Cloud Kicks (CK) wants to set up a custom child object to track gift cards issued to a customer. A key requirement is to track the total number of gift cards opened and gift cards issued on an Account. CK wants to permanently ensure the gift cards are unable to be moved across any other Account once it is created. On the gift card object, what type of field should be created to support this requirement?",
    options: [
      { letter: 'A', text: 'Master-detail relationship' },
      { letter: 'B', text: 'Roll-up summary' },
      { letter: 'C', text: 'Formula' },
      { letter: 'D', text: 'Lookup relationship' }
    ],
    answers: ['A'],
    explanation: "The app builder should create a master-detail relationship field on the gift card object to support the requirement. A master-detail relationship field creates a parent-child relationship between two objects, where the master record controls certain behaviors of the detail record. In this case, the Account object would be the master and the gift card object would be the detail. By creating a master-detail relationship field, the app builder can meet these requirements: Track the total number of gift cards opened and gift cards issued on an Account: This can be done by creating roll-up summary fields on the Account object that count or sum up the values from the gift card records related to each account. Permanently ensure the gift cards are unable to be moved across any other Account once it is created: This can be done by making the master-detail relationship field required on the gift card object, which means that every gift card record must be associated with an account record and cannot be changed once set. Option B, C, and D are not types of fields that can support this requirement."
  },
  {
    question: "Universal Containers require different fields to be filled out at each stage of the Opportunity sates process. What configuration steps can an app builder use to meet this requirement?",
    options: [
      { letter: 'A', text: 'Set page layout required fields based on the current stage.' },
      { letter: 'B', text: 'Create a Process Builder to prompt the User for field information.' },
      { letter: 'C', text: 'Define record types and page layouts for each stage.' },
      { letter: 'D', text: 'Add the Path component to the Lightning record page.' }
    ],
    answers: ['D'],
    explanation: "The app builder should use the Path component to meet the requirement of tracking different fields at each stage of the Opportunity sales process. The Path component is a Lightning component that displays the key fields and guidance for each stage of a standard or custom picklist field, such as the Opportunity Stage field. The app builder can configure the Path component to show the fields that need to be filled out and provide recommendations and sales strategies for each stage. Option A, B, and C are not configuration steps that can meet this requirement."
  },
  {
    question: "Universal Containers has created two custom objects called Seminars and Attendees. Organization-wide defaults for these objects have been set to Private. Universal Containers wants to set up a new Junction object between these custom objects. A select group of users should be able to edit records in the Junction object. Which two steps should an app builder take to configure the proper security?",
    options: [
      { letter: 'A', text: 'Set Sharing Settings to Road Only on both Master-Detail relationship fields.' },
      { letter: 'B', text: 'Create owner-based sharing rules that give Read access to the master objects.' },
      { letter: 'C', text: 'Sat lookup filters on both Junction object relationship field.' },
      { letter: 'D', text: 'Create an owner-based sharing rule that gives Road action to the junction object.' }
    ],
    answers: ['A', 'D'],
    explanation: "A: Setting Sharing Settings to Read Only on both Master-Detail relationship fields ensures that users can view but not edit the master records from the junction object."
  },
  {
    question: "The VP of Sales wants a Chatter post to the All-Sales private group when an opportunity goes to the closed won stage. What two tools should the app builder use to automate this process? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Flow' },
      { letter: 'B', text: 'Process Builder' },
      { letter: 'C', text: 'Big Deal Alert' },
      { letter: 'D', text: 'Workflow' }
    ],
    answers: ['B', 'D'],
    explanation: "The app builder should use two tools to automate this process: Process Builder: This is a type of automation tool that can execute actions based on certain criteria. In this case, the process builder can have a criteria that evaluates if an opportunity goes to the closed won stage, and then execute an action that posts a message to a Chatter group. Workflow: This is another type of automation tool that can execute actions based on certain criteria. In this case, the workflow can have a criteria that evaluates if an opportunity goes to the closed won stage, and then execute an action that posts a message to a Chatter group. Option A and C are not tools that can automate this process."
  },
  {
    question: "DreamHouse Realty wants to import its property records from an external system into Salesforce. The app builder will use an external ID field to house the property ID from the external system. Which two details should the app builder know when using external ID fields? Choose 2 answers",
    options: [
      { letter: 'A', text: 'An external ID field can be a number field.' },
      { letter: 'B', text: 'An external ID field can be a URL field.' },
      { letter: 'C', text: 'An external ID field can be a phone field.' },
      { letter: 'D', text: 'An external IDfield can be a text field.' }
    ],
    answers: ['A', 'D'],
    explanation: "An external ID field can be a number field or a text field, but not a URL field or a phone field. A URL field is used to store web addresses and a phone field is used to store phone numbers. An external ID field is used to store unique identifiers from an external system and it can be used for upsert operations."
  },
  {
    question: "An app builder has created a change set and deployed a report from their development sandbox for User Acceptance Testing. When the app builder runs the report, no data is returned. What can be a reason for this?",
    options: [
      { letter: 'A', text: 'Reports have to be deployed with Salesforce DX.' },
      { letter: 'B', text: 'Reports have to be manually re-created in each environment.' },
      { letter: 'C', text: 'Data is deployed when added to a change sets.' },
      { letter: 'D', text: 'Data is unable to be deployed with change sets.' }
    ],
    answers: ['D'],
    explanation: "Data is unable to be deployed with change sets. Change sets are used to deploy metadata components such as custom objects, fields, workflows, reports, etc. from one Salesforce org to another. However, change sets do not include any data or records from the source org. Users will need to use other tools such as Data Loader or Data Import Wizard to migrate data between orgs."
  },
  {
    question: "Universal Containers (UC) has several picklist fields on the Account object whose values are routinely modified to meet changing business requirements. Due to these revolving changes, UC has a high number of inactive picklist values that are impacting system performance and user experience. What can the app builder do to alleviate this issue?",
    options: [
      { letter: 'A', text: 'Establish upper bound on existing picklists in Picklist Settings.' },
      { letter: 'B', text: 'Set up Global Values in Picklist Value Sets.' },
      { letter: 'C', text: 'Remove upper bound on inactive picklist values in Picklist Settings.' },
      { letter: 'D', text: 'Convert the picklist fields to a different field type that will still meet the business requirements.' }
    ],
    answers: ['B'],
    explanation: "To manage frequently changing picklist values effectively: Set up Global Values in Picklist Value Sets. This approach allows for centralized management of picklist values that can be reused across multiple fields and objects. By using global value sets, inactive values can be efficiently managed and deactivated without impacting fields that use these sets. For further information on managing picklists, check Salesforce's Picklist Management guide."
  },
  {
    question: "Cloud Kicks wants to set up a new opportunity approval process and execute various action items based on the initial submission. Which three action types should an app builder use in the approval process? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Email Alert' },
      { letter: 'B', text: 'Outbound Message' },
      { letter: 'C', text: 'Task' },
      { letter: 'D', text: 'Invocable Flow' },
      { letter: 'E', text: 'Invocable Process Builder' }
    ],
    answers: ['A', 'C', 'D'],
    explanation: "Email alert, task, and invocable flow are three action types that can be used in an approval process. Email alert can send an email message to one or more recipients. Task can assign a task to a user or queue. Invocable flow can launch a flow that performs complex logic and actions."
  },
  {
    question: "A user is unable to use inline editing on a list view. A quick check verifies the user should be able to perform inline editing as they have been assigned the appropriate permissions. Which two conditions should the app builder review? Choose 2 answers",
    options: [
      { letter: 'A', text: 'If the list view restricts sharing for the user' },
      { letter: 'B', text: 'If the list view selected is the recently viewed list view' },
      { letter: 'C', text: 'If the list view contains a chart created by the user' },
      { letter: 'D', text: 'If the list view contains more than one record type' }
    ],
    answers: ['B', 'D'],
    explanation: "Two conditions that can prevent inline editing on a list view are if the list view selected is the recently viewed list view, or if the list view contains more than one record type. The recently viewed list view does not support inline editing, as it is not based on a single object. The list view must have a single record type to enable inline editing, as different record types may have different fields and values."
  },
  {
    question: "A new custom object is being created with a private sharing setting. The business wants to share individual records with specific people or group of people on a case-by-case basis. What options does the business user have to manually share individual records? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Public Groups' },
      { letter: 'B', text: 'Permission Sets' },
      { letter: 'C', text: 'Roles' },
      { letter: 'D', text: 'Profiles' },
      { letter: 'E', text: 'Users' }
    ],
    answers: ['A', 'C', 'E'],
    explanation: "To manually share individual records with specific people or group of people on a case by case basis, users can use public groups, roles, or users. Public groups are collections of users, roles, or other groups that can be used to share access to records. Roles define the level of access that users have to their organization's data based on their position in the hierarchy. Users are individual people who log in to Salesforce and have access to records based on their profile, role, and sharing settings."
  },
  {
    question: "An App Builder wants to deploy a new version of an auto launched flow to production in an active state so that the new functionality Is immediately available to users What should the App Builder rake into consideration when planning the deployment?",
    options: [
      { letter: 'A', text: 'Verify there is an Apex test that provides test coverage for the Flow.' },
      { letter: 'B', text: 'Grant user access to the Flow.' },
      { letter: 'C', text: 'Manually activate the Flow after deployment' },
      { letter: 'D', text: 'Include the Process Builder calling the Flow In the deployment' }
    ],
    answers: ['A'],
    explanation: "The app builder should verify that there is an Apex test that provides test coverage for the Flow. An Apex test is a unit test that verifies the functionality and quality of Apex code. Apex tests are required to deploy any change that contains Apex code or references Apex code, such as an auto launched flow. The app builder should ensure that there is an Apex test that covers at least 75% of the Flow logic before deploying it to production in an active state. Option B, C, and D are not things that the app builder should take into consideration when planning the deployment."
  },
  {
    question: "universal containers is migrating its sales operations from a legacy system that was used. opportunities need to be imported with the proper country currency. Which two steps should an app builder configure to meet these requirements? Choose 2 answers.",
    options: [
      { letter: 'A', text: 'Include the currency ISO code in all currency fields in the import file.' },
      { letter: 'B', text: 'Use Data Loader to import the records.' },
      { letter: 'C', text: 'Include the currency ISO Code Column in the import file.' },
      { letter: 'D', text: 'Use import the currency ISO Code Column in the import file.' },
      { letter: 'E', text: 'Use Import Wizard to import the records.' }
    ],
    answers: ['A', 'B'],
    explanation: "To import opportunities with the proper country currency, the app builder needs to include the currency ISO code in all currency fields in the import file, and use Data Loader to import the records. Data Loader supports importing multiple currencies, while Import Wizard does not. The currency ISO code column in the import file specifies the currency for each record."
  },
  {
    question: "SERVICE AGENTS ARE REQUIRED TO CONFIRM A USER IDENTITY BEFORE PROVIDING SUPPORT INFORMATION OVER THE PHONE. WHAT FEATURE CAN AN APP BUILDER USE TO HELP AGENTS MEET THIS REQUIREMENT?",
    options: [
      { letter: 'A', text: 'Include Surveys as a Case related list' },
      { letter: 'B', text: 'Case Validation Rules' },
      { letter: 'C', text: 'Add Path to the top of the Case layout' },
      { letter: 'D', text: 'Guided Action Flows on the record page' }
    ],
    answers: ['D'],
    explanation: "Guided Action Flows on the record page can help service agents meet the requirement of confirming a user identity before providing support information over the phone. Guided Action Flows are a series of screens that guide agents through a predefined process, such as verifying user information, collecting case details, or resolving issues."
  },
  {
    question: "Universal Containers created a custom object called Component to capture details about products sold. What approach should an app builder take to show Component as a related list on Product?",
    options: [
      { letter: 'A', text: 'Create a master-detail relationship on Product to Component. Add the Component related list to the Product page layout.' },
      { letter: 'B', text: 'Create a junction object to relate Component and Product. Add the Component related list to the Product page layout.' },
      { letter: 'C', text: 'Create a roll-up on Product. Add the Component related list to the Product page layout.' },
      { letter: 'D', text: 'Create a lookup relationship on Component to Product. Add the Component related list to the Product page layout.' }
    ],
    answers: ['D'],
    explanation: "To show Component as a related list on Product, a lookup relationship on Component to Product should be created. A lookup relationship creates a loose association between two objects and allows users to relate records from one object to another. A lookup relationship also allows users to add the related list of the child object to the parent object's page layout."
  },
  {
    question: "Duplicate management for Leads has been implemented at Universal Containers but it seems duplicate leads are still being created. The Org Wide Default (OWD) is set to \"Private\" for Leads. Which two actions help prevent duplicate Leads from being created? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Change the lead Hatching Rule to Block on create.' },
      { letter: 'B', text: 'Change OWD for Leads to Public Read.' },
      { letter: 'C', text: 'Change the Lead Duplicate Rule details to Bypass Sharing Rules.' },
      { letter: 'D', text: 'Change the Lead Assignment Rule to check for duplicates.' }
    ],
    answers: ['A', 'C'],
    explanation: "Changing the Lead Matching Rule to 'Block on create' will directly prevent duplicates at the point of lead creation based on defined criteria. Changing the Lead Duplicate Rule details to Bypass Sharing Rules ensures the duplicate rule compares the newly created record against all records in the system, preventing duplicates from slipping through due to the 'Private' sharing model."
  },
  {
    question: "Universal Containers deployed an app in a large change set from a Developer Sandbox to a Developer Pro Sandbox used for testing. After testing, changes had to be made to several of the components in the change set. How should an app builder move the new changes to the Developer Pro Sandbox?",
    options: [
      { letter: 'A', text: 'Refresh the text sandbox and re_display the change set.' },
      { letter: 'B', text: 'Clone the change set and re_display' },
      { letter: 'C', text: 'Rename the change set, add the changes and re_display' },
      { letter: 'D', text: 'Update the change set and re_display' }
    ],
    answers: ['D'],
    explanation: "Update the change set and re_display. Reference: Salesforce Help - Change Sets."
  },
  {
    question: "An app builder is preparing to deploy a new app from the sandbox to production using change sets. What two considerations should an app builder keep in mind during this process? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Salesforce Connect automatically establishes a link between environments.' },
      { letter: 'B', text: 'Change sets do not include all components and may have to perform some changes manually.' },
      { letter: 'C', text: 'Users should be logged out of production when receiving inbound change sets.' },
      { letter: 'D', text: 'Transactions will revert if the deployment errors.' }
    ],
    answers: ['B', 'C'],
    explanation: "The two considerations that an app builder should keep in mind during the deployment process using change sets are: Change sets do not include all components and may have to perform some changes manually. Change sets are a way to deploy metadata changes from one Salesforce org to another, but they do not support all types of components, such as reports, dashboards, email templates, etc. The app builder may have to use other methods, such as unmanaged packages or manual configuration, to deploy these components. Users should be logged out of production when receiving inbound change sets. This is a best practice to avoid any errors or conflicts that may occur when deploying changes to production."
  },
  {
    question: "Cloud Kicks is redefining its entire business process to convert the Manager Notes field from a long text area field. The goal is to encourage managers to be more concise in their comments and stayat 255 characters or less. There is preexisting information in the Manager Notes field that often is well beyond the character limit. What would happen to any existing information if the app builder tries to convert a preexisting long text area field to text area?",
    options: [
      { letter: 'A', text: 'Preexisting information will truncate to the first 255 characters.' },
      { letter: 'B', text: 'Preexisting information will remain even if it was over 255 characters.' },
      { letter: 'C', text: 'Preexisting information will cause a- e-r0- -essace to poo up.' },
      { letter: 'D', text: 'Preexisting information in the field will be completely lost.' }
    ],
    answers: ['A'],
    explanation: "If the app builder tries to convert a preexisting long text area field to text area, preexisting information will truncate to the first 255 characters. This means that any information beyond 255 characters will be lost. Option B is incorrect because preexisting information will not remain if it was over 255 characters. Option C is incorrect because preexisting information will not cause an error message to pop up. Option D is incorrect because preexisting information in the field will not be completely lost, only truncated."
  },
  {
    question: "Universal Containers wants to improve the process to create Opportunity records related to an Account. Many fields can be populated based on the Account record. Some fields require input from the user. What should an app builder configure to meet the requirement?",
    options: [
      { letter: 'A', text: 'Process Builder triggered from Opportunity update' },
      { letter: 'B', text: 'Quick Action on the Account object' },
      { letter: 'C', text: 'Quick Action on the Opportunity object' },
      { letter: 'D', text: 'Process Builder triggered from Account update' }
    ],
    answers: ['B'],
    explanation: "A quick action on the Account object can be used to create Opportunity records related to an Account. The quick action can pre-populate some fields based on the Account record, and also allow the user to input some fields. This would improve the process of creating Opportunity records."
  },
  {
    question: "An app builder has a custom component they want to make available on the utility bar, but the component is unavailable. How should the component be tagged?",
    options: [
      { letter: 'A', text: 'For use on record pages.' },
      { letter: 'B', text: 'For use in Lightning App Builder.' },
      { letter: 'C', text: 'For use on the utility bar.' },
      { letter: 'D', text: 'For use in App Manager.' }
    ],
    answers: ['C'],
    explanation: "To make a custom component available for the utility bar in Salesforce, the component needs to be explicitly tagged for use in the utility bar. Salesforce components require specific configurations to be available in different parts of the application, such as the utility bar, record pages, or app pages. When a custom Lightning component is developed, it must include a specific target tag in its .js-meta.xml configuration file that marks it as usable in the utility bar by setting the target to \"lightning__UtilityBar\"."
  },
  {
    question: "Cloud Kicks (CK) wants to begin socializing and collaborating within Salesforce around customer accounts to discuss various topics. CK would like all company employees to see these conversations. Which two features of Chatter would meet CK's business needs? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Set up new private Chatter groups.' },
      { letter: 'B', text: 'Set up new public Chatter groups.' },
      { letter: 'C', text: 'Use post action on the Account object.' },
      { letter: 'D', text: 'Use Chatter actions to create tasks to complete.' }
    ],
    answers: ['B', 'C'],
    explanation: "The two features of Chatter that would meet CK's business needs are: Set up new public Chatter groups and use post action on the Account object. A public Chatter group is a collaborative space that can be joined by any user in the organization and can be seen by anyone. Using a post action on the Account object allows users to create a post directly on a record's feed, enabling users to share updates, feedback, or questions about customer accounts and engage with other users who follow those accounts."
  },
  {
    question: "DreamHouse Realty (DHR) recently acquired Cloud Kicks (CK), a company that is still on Salesforce Classic. DHR is keeping the CK Salesforce org; however, it will migrate this org to Lightning Experience. Where should the app builder find prebuilt resources to help with this project and overall adoption?",
    options: [
      { letter: 'A', text: 'Import Wizard' },
      { letter: 'B', text: 'Lightning Object Creator' },
      { letter: 'C', text: 'AppExchange' },
      { letter: 'D', text: 'Flow Builder' }
    ],
    answers: ['C'],
    explanation: "AppExchange is a marketplace where app builders can find prebuilt resources to help with migration and adoption projects. AppExchange offers apps, components, solutions, and consulting services that can assist with moving from Classic to Lightning Experience. Import Wizard, Lightning Object Creator, and Flow Builder are not sources of prebuilt resources, but tools for data import, object creation, and automation respectively."
  },
  {
    question: "An app builder at DreamHouse Realty created a custom object which has fields containing data from two different objects via related lookups. What is needed to create \"with\" or \"without\" reports on the new custom object?",
    options: [
      { letter: 'A', text: 'Row-Level Formula' },
      { letter: 'B', text: 'Report Bucket Field' },
      { letter: 'C', text: 'Report Filters' },
      { letter: 'D', text: 'Custom Report Type' }
    ],
    answers: ['D'],
    explanation: "To create \"with\" or \"without\" reports on the new custom object, a custom report type is needed. A custom report type defines the relationship between one or more standard or custom objects for reporting purposes. It allows users to select which fields they want to display in their reports and filter by related objects."
  },
  {
    question: "The Service Manager provided the app builder with color code requirements for case age on open cases.\nNew cases populate a green circle\nDay-old cases populate a yellow circle\nThree-day-old cases populate a red circle\nHow should an app builder implement this requirement?",
    options: [
      { letter: 'A', text: 'Formula Field' },
      { letter: 'B', text: 'Quick Action' },
      { letter: 'C', text: 'Custom Button' },
      { letter: 'D', text: 'Lightning Web Component' }
    ],
    answers: ['A'],
    explanation: "A formula field is a read-only field that derives its value from a formula expression you define. The formula field is updated when any of the source fields change. You can use formula fields to display images based on certain conditions. In this case, a formula field can be used to display a green, yellow, or red circle image based on the case age."
  },
  {
    question: "Universal Containers (UC) needs a picklist field called Status on three separate custom objects. UC has a requirement to share the list of values for this field across each object.",
    options: [
      { letter: 'A', text: 'Related Picklist' },
      { letter: 'B', text: 'Shared Custom Field' },
      { letter: 'C', text: 'Global Picklist Value Set' },
      { letter: 'D', text: 'Dependent Picklist' }
    ],
    answers: ['C'],
    explanation: "When multiple objects require the same picklist values, the correct approach is to create a Global Picklist Value Set (also called a Global Value Set). This allows an organization to maintain one centralized list of picklist values that can be reused across multiple picklist fields on different objects. This ensures consistent data values, simplifies maintenance, and makes changes automatically available wherever the global picklist is used."
  },
  {
    question: "The Director of Marketing at Northern Trail Outfitters wants the app builder to create a formula field that tracks how many days have elapsed since a contact was sent a marketing communication. The director is only interested in whole units. Which function should be used to return a date for calculating the difference?",
    options: [
      { letter: 'A', text: 'DATFTIMEVALUE()' },
      { letter: 'B', text: 'TODAY()' },
      { letter: 'C', text: 'DATEVALUE()' },
      { letter: 'D', text: 'NOW()' }
    ],
    answers: ['B'],
    explanation: "TODAY() is the function that should be used to return a date for calculating the difference between today and the date a marketing communication was sent. According to the Salesforce documentation, \"TODAY() returns the current date as a Date value.\" DATETIMEVALUE() converts a text value into a Date/Time value. DATEVALUE() converts a Date/Time value into a Date value. NOW() returns the current Date/Time value."
  },
  {
    question: "Northern Trail Outfitters has two custom objects that are part of a master-detail relationship. What determines the ownership and sharing access of the detail record?",
    options: [
      { letter: 'A', text: 'The default owner is set in the parent object\'s settings.' },
      { letter: 'B', text: 'The Owner field on the Detail record.' },
      { letter: 'C', text: 'The Owner field on the Master record.' },
      { letter: 'D', text: 'The owner is set independently on the detail object\'s settings.' }
    ],
    answers: ['C'],
    explanation: "The Owner field on the Master record determines the ownership and sharing access of the detail record in a master-detail relationship. According to the Salesforce documentation, \"The detail record inherits the sharing and security settings of its master record.\". The default owner is not set in the parent object's settings, the Owner field on the Detail record does not exist, and the owner is not set independently on the detail object's settings."
  },
  {
    question: "An app builder created multiple custom fields, page layouts, and reports in the sandbox and added them to a change set was deployed to production, the reports were NOT deployed. What should the app builder do?",
    options: [
      { letter: 'A', text: 'Move the reports to the Untried Public Reports folder and add them to a new change set.' },
      { letter: 'B', text: 'Move the reports from the Unfiled Public Reports folder and add them to a new change set' },
      { letter: 'C', text: 'Recreate the reports in production. Reports are not supported in change sets' },
      { letter: 'D', text: 'Add the reports to an unmanaged package and install the unmanaged package into production.' }
    ],
    answers: ['B'],
    explanation: "Moving the reports from the Unfiled Public Reports folder and adding them to a new change set is what the app builder should do to deploy the reports to production. According to the Salesforce documentation, \"Reports in the Unfiled Public Reports folder aren't available for deployment.\". Moving the reports to the Untried Public Reports folder, recreating the reports in production, and adding the reports to an unmanaged package are not necessary or recommended actions."
  },
  {
    question: "Sales Managers want to be automatically notified any time there is a change to an Opportunity Close Date and want these changes to be tracked on the Opportunity. Which two configurations should an app builder recommend? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Create an Opportunity outbound message.' },
      { letter: 'B', text: 'Use Process Builder on Opportunities and a Chatter post action.' },
      { letter: 'C', text: 'Activate Historical Trending for Opportunities.' },
      { letter: 'D', text: 'Enable Feed Tracking on Opportunities.' }
    ],
    answers: ['B', 'D'],
    explanation: "Using Process Builder on Opportunities and a Chatter post action, and enabling Feed Tracking on Opportunities are two configurations that an app builder can recommend to meet the requirement of notifying and tracking changes to an Opportunity Close Date. Process Builder can create a process that triggers a Chatter post action when the Close Date field is changed on an Opportunity. Feed Tracking can enable tracking of field history for the Close Date field on the Opportunity feed. Creating an Opportunity outbound message and activating Historical Trending for Opportunities are not valid configurations for this requirement."
  },
  {
    question: "Universal Containers manages leads in a Lead qualification queue where sales reps can accept ownership of the Lead. Campaign members are required to have a sales owner. What validation rule should an app builder configure?",
    options: [
      { letter: 'A', text: 'AND( ISBLANK(Lead.Owner.Id) )' },
      { letter: 'B', text: 'NOT(ISNEW() && ISBLANK(Lead.Owner:Queue.Id))' },
      { letter: 'C', text: 'AND(ISNEW(), ISBLANK(Lead.Owner:User.Id))' },
      { letter: 'D', text: 'NOT(ISBLANK(Lead.Owner:Queue.Id))' }
    ],
    answers: ['C'],
    explanation: "The validation rule should be AND(ISNEW(), ISBLANK(Lead.Owner:User.Id)). This rule will prevent saving a new lead record if the owner is not a user. This will ensure that campaign members have a sales owner. Option A is incorrect because it will prevent saving any lead record if the owner is blank, which is not the requirement. Option B is incorrect because it will prevent saving an existing lead record if the owner is a queue, which is not the requirement. Option D is incorrect because it will prevent saving any lead record if the owner is a queue, which is not the requirement."
  },
  {
    question: "Cloud Kicks wants to make sure that users without the Marketing role are unable to update the Contact Retail Opt In picklist field to Yes. What validation rule would an app builder use to prevent other users from making this update?",
    options: [
      { letter: 'A', text: 'AND( $UserRole.Name != \'Marketing\',ISCHANGED(Retail_Opt_In__c), ISPICKVAL(Retail_0pt_In_c,"Yes") )' },
      { letter: 'B', text: 'AND( $UserRole.Name != \'Marketing\', Retail_Opt_In_c = "Yes" )' },
      { letter: 'C', text: 'AND( $UserRole.Name = \'Marketing\', ISPICKVAL(Retail_Opt_In_c,"Yes") )' },
      { letter: 'D', text: 'AND( $UserRole.Name = \'Marketing\', Retail_Opt_In__c= "Yes" )' }
    ],
    answers: ['A'],
    explanation: "The validation rule should check if the user role is not Marketing, and if the Retail Opt In field has been changed to Yes. The ISCHANGED function returns true if the field value has been changed, and the ISPICKVAL function returns true if the field value matches a specified picklist value."
  },
  {
    question: "Cloud Kicks recently implemented the application lifecycle management process to its release management strategy. Which category handles bug fixes and simple changes?",
    options: [
      { letter: 'A', text: 'Patch' },
      { letter: 'B', text: 'Minor' },
      { letter: 'C', text: 'Major' },
      { letter: 'D', text: 'Rollback' }
    ],
    answers: ['A'],
    explanation: "The category that handles bug fixes and simple changes is minor. A minor release is a type of release that introduces small enhancements or fixes to existing functionality, such as correcting spelling errors or improving performance. A minor release usually has a low impact on users and does not require extensive testing or training. A patch release is a type of release that addresses critical issues or defects that affect the functionality or security of an application, such as fixing broken links or resolving vulnerabilities. A patch release usually has a high impact on users and requires immediate deployment. A major release is a type of release that introduces new functionality or features to an application, such as adding new objects or components or changing business processes. A major release usually has a high impact on users and requires extensive testing and training. A rollback is not a type of release, but an action that reverses a release that has been deployed to an environment, such as undoing changes or restoring previous versions. A rollback may be necessary if a release causes errors or issues that affect the functionality or performance of an application."
  },
  {
    question: "When an opportunity close date is delayed by more than 60 days, the manager and the VP sales must approve the change. How can this requirement be met? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Build an approval process that requires unanimous approval from the manager and VP of sales.' },
      { letter: 'B', text: 'Create a workflow rule that checks for close date less than 60 days and add an email alert .' },
      { letter: 'C', text: 'Create a lightning process builder flow that submits the record for an approval process' },
      { letter: 'D', text: 'Build a validation rule that does not allow a user to save the opportunity record.' }
    ],
    answers: ['A', 'C'],
    explanation: "The requirement can be met by using a combination of process builder and approval process. The process builder can be used to trigger the approval process when the close date is delayed by more than 60 days. The approval process can be configured to require unanimous approval from the manager and VP of sales."
  },
  {
    question: "Universal Container wants customers to be able to open cases from a public-facing website. What should the app builder use to enable visitors to the website?",
    options: [
      { letter: 'A', text: 'Outbound message' },
      { letter: 'B', text: 'Web-to-case' },
      { letter: 'C', text: 'Screen flow' },
      { letter: 'D', text: 'Email-to-case' }
    ],
    answers: ['B'],
    explanation: "The app builder should use Web-to-Case to enable visitors to the website to open cases. Web-to-Case is a feature that allows users to create an HTML form that can be embedded into a public-facing website. When visitors fill out and submit the form, a new case is automatically created in Salesforce with the information from the form fields. Web-to-Case can also assign cases to queues or users based on predefined rules and criteria. Outbound message is not a valid tool, as it does not enable visitors to open cases. An outbound message is a type of workflow action that sends a secure XML message to a designated endpoint URL when a record meets certain criteria. An outbound message can be used to integrate Salesforce with external systems or applications. Screen flow is not a valid tool, as it does not enable visitors to open cases from a public-facing website. A screen flow is a type of flow that allows users to create an interactive guided process that can collect, display, and update data from multiple objects within Salesforce. A screen flow can be embedded into Lightning pages or Visualforce pages, but it cannot be exposed to unauthenticated users on a public website. Email-to-Case is not a valid tool, as it does not enable visitors to open cases from a website. Email-to-Case is a feature that allows users to create cases from email messages sent to a specific email address. Email-to-Case can also capture email attachments and thread information and associate them with the case."
  },
  {
    question: "At Ursa Major Solar there is a requirement for a new field called Planet Details on the Planet object where users can write detailed descriptions that can include pictures and links. What field type should the app builder utilize to fulfill this requirement?",
    options: [
      { letter: 'A', text: 'Long Text Area' },
      { letter: 'B', text: 'Rich Text Area' },
      { letter: 'C', text: 'Multi-Select Picklist' },
      { letter: 'D', text: 'URL' }
    ],
    answers: ['B'],
    explanation: "Ursa Major Solar requires a new field called Planet Details on the Planet object, where users can write detailed descriptions that can include pictures and links. The Rich Text Area field type is the best fit for this requirement. Option B (Rich Text Area): A Rich Text Area field allows users to enter text with formatting options such as bold, italics, bullets, and numbering. Additionally, it supports inserting images and hyperlinks, which matches the requirement of including pictures and links in the description. Rich Text Area Fields Option A (Long Text Area): A Long Text Area field allows for lengthy text input but does not support formatting or embedding of images and links, which are necessary in this case. Option C (Multi-Select Picklist): A Multi-Select Picklist allows users to select multiple values from a list but is not suitable for detailed descriptions or embedding images and links. Option D (URL): A URL field is used to store and display a link but does not support text input or embedding images. In summary, the Rich Text Area field type should be used because it allows formatted text, images, and links, which are required for the Planet Details field."
  },
  {
    question: "Universal Because of the small screen, they currently have to scroll down the page to view the information for an account based on criteria about the related contact. Which solution should an app builder use to fulfill this requirement?",
    options: [
      { letter: 'A', text: 'Set the filter type on the component visibility to display based on user permissions. using custom permission to define the dynamic criteria.' },
      { letter: 'B', text: 'Add a related record component to the page layout' },
      { letter: 'C', text: 'Set the component visibility to display based or an advanced filter type, using the contact field\'s) to define the dynamic criteria.' },
      { letter: 'D', text: 'Hide the component behind a tab on the page layout.' }
    ],
    answers: ['C'],
    explanation: "Reference: Salesforce Help - Dynamic Forms"
  },
  {
    question: "Cloud Kicks asked the app builder to insert a list of 25,000 records using deduplication for the Race_Track__c customobject. Which tool should be used?",
    options: [
      { letter: 'A', text: 'Import Wizard' },
      { letter: 'B', text: 'Lightning Object Creator' },
      { letter: 'C', text: 'Data Loader' },
      { letter: 'D', text: 'Schema Builder' }
    ],
    answers: ['C'],
    explanation: "Cloud Kicks needs to insert 25,000 records with deduplication for the Race_Track__c custom object. Here's the reasoning for choosing Data Loader: Data Loader: This is the appropriate tool for importing large volumes of data (up to 5 million records) into Salesforce. It also provides deduplication options through Salesforce's native matching rules or by implementing external checks. Data Loader is highly scalable, and for 25,000 records, it is well-suited because it can handle more than the Import Wizard's record limits. Option A (Import Wizard): The Import Wizard is not a good choice here because it supports up to 50,000 records, which may seem acceptable. However, it is generally recommended for smaller data imports, and deduplication options are limited compared to what Data Loader offers. Additionally, for bulk operations like 25,000 records, Data Loader is more efficient and robust. Import Wizard Limitations Option B (Lightning Object Creator): This tool is used to create custom objects from spreadsheets and is not designed for bulk data loading or deduplication. It's not appropriate for large data imports. Option D (Schema Builder): Schema Builder is a tool used to view and modify the structure of objects and fields in Salesforce, not for data import or deduplication purposes. In summary, Data Loader is the most appropriate tool for importing a large number of records with deduplication needs."
  },
  {
    question: "DreamHouse Realty requires that field value changes for certain fields such as Asking_Price__c and Real_Estate_Agent„c on their House__c custom object show up prominently on Chatter. What Chatter feature should the app builder utilize?",
    options: [
      { letter: 'A', text: 'Thanks' },
      { letter: 'B', text: 'Publisher Actions' },
      { letter: 'C', text: 'Topics' },
      { letter: 'D', text: 'Feed Tracking' }
    ],
    answers: ['D'],
    explanation: "Feed Tracking is the Chatter feature that allows field value changes for certain fields to show up on Chatter. Thanks, Publisher Actions, and Topics are other Chatter features, but they do not relate to field value changes."
  },
  {
    question: "The app builder needs to change the data types of new custom fields. The app builder is not able to delete and recreate any of the fields, nor modify any apex code. Which data type change will require the app builder to perform the additional steps in order to retain existing functionalities?",
    options: [
      { letter: 'A', text: 'Changing the data type of a field used in an apex class from number to text.' },
      { letter: 'B', text: 'Changing the data type of a field used in a report from a text to an encrypted field' },
      { letter: 'C', text: 'Changing the data type of a field used as an external id from number to text.' },
      { letter: 'D', text: 'Changing the data type of a field used in lead conversion from number to text' }
    ],
    answers: ['A'],
    explanation: "Changing the data type of a field used in an apex class from number to text will require the app builder to perform additional steps in order to retain existing functionalities. This is because changing the data type of a field may affect the apex code that references or manipulates the field value, and may cause compilation errors or unexpected results. The app builder will need to update the apex code to handle the new data type and ensure that the logic and calculations are still correct. Option B is incorrect because changing the data type of a field used in a report from a text to an encrypted field will not require additional steps, as encrypted fields can still be used in reports with some limitations. Option C is incorrect because changing the data type of a field used as an external id from number to text will not require additional steps, as external id fields can be either number or text. Option D is incorrect because changing the data type of a field used in lead conversion from number to text will not require additional steps, as lead conversion fields can be mapped regardless of their data types."
  },
  {
    question: "Universal Containers wants to match Opportunity data from Salesforce to the records in a financial database. What is required to configure an indirect lookup relationship in Salesforce between the Salesforce Opportunity records and those in a financial database?",
    options: [
      { letter: 'A', text: 'Salesforce Record ID' },
      { letter: 'B', text: 'TEXT(Id)' },
      { letter: 'C', text: 'External ID' },
      { letter: 'D', text: 'CASESAFE(Id)' }
    ],
    answers: ['C'],
    explanation: "An indirect lookup relationship is a custom relationship between two objects that are linked by an external ID field. The external ID field must be a custom field on the parent object that has the \"External ID\" attribute enabled. The child object must be a standard or custom object that is on the detail side of a master-detail or lookup relationship."
  },
  {
    question: "Universal Containers has several new fields they've requested for the Opportunity Product object. What should an app builder be able to configure using a formula field?",
    options: [
      { letter: 'A', text: 'A hyperlink to the parent Account of the parent Opportunity.' },
      { letter: 'B', text: 'A Rich Text area field that uses HTML to bold certain characters.' },
      { letter: 'C', text: 'A combination of the Opportunity\'s Text and a Description fields.' },
      { letter: 'D', text: 'A mix of functions and concatenation of 10 Account fields and 10 Opportunity fields.' }
    ],
    answers: ['C'],
    explanation: "Formula fields in Salesforce can use various functions including text, mathematical, and logical functions to create simple or complex expressions. They can handle data from fields of the same record. Option C, \"A combination of the Opportunity's Text and a Description fields,\" is a valid configuration for a formula field as it involves simple concatenation of text fields, which is supported. Options A, B, and D exceed the capabilities of formula fields: A: Hyperlinks to other objects using formula fields do not directly support navigation to parent records of a different object. B: Rich Text and HTML formatting are not supported in formula fields."
  },
  {
    question: "On the Account Lightning record page, users need to see ten fields and the ability to sort and wrap text on their Related Lists. What Related List type would the app builder select for the Related List Lightning component?",
    options: [
      { letter: 'A', text: 'Enhanced List' },
      { letter: 'B', text: 'Basic List' },
      { letter: 'C', text: 'ListVlew' },
      { letter: 'D', text: 'List Class' }
    ],
    answers: ['A'],
    explanation: "The app builder should select Enhanced List for the Related List type for the Related List Lightning component. Enhanced List allows users to see ten fields and sort and wrap text on their Related Lists. Option B is incorrect because Basic List only allows users to see four fields and does not support sorting or wrapping text on their Related Lists. Option C is incorrect because ListView does not show Related Lists on record pages, but rather shows list views on object home pages or tabs. Option D is incorrect because List Class is not a valid Related List type."
  },
  {
    question: "Northern Trail Outfitters uses a custom object to track travel requests. Rangers want to have automatic posts on a record whenever a travel request has been approved. Which feature should be used to accomplish this?",
    options: [
      { letter: 'A', text: 'Auto-response rule' },
      { letter: 'B', text: 'Workflow rule' },
      { letter: 'C', text: 'Feed tracking' },
      { letter: 'D', text: 'Feed quick action' }
    ],
    answers: ['C'],
    explanation: "To have automatic posts on a record whenever a travel request has been approved, feed tracking should be used. Feed tracking enables field updates to be displayed in the Chatter feed of a record or a user profile. Users can follow records or users to see updates in their own feed. Feed tracking can be enabled for standard or custom objects and selected fields."
  },
  {
    question: "Which two solutions prevent a formula field from being referenced by a Roll-Up Summary Field?",
    options: [
      { letter: 'A', text: 'A cross-object workflow updating a field referenced by the formula field' },
      { letter: 'B', text: 'A cross-object field reference in the formula field' },
      { letter: 'C', text: 'The CASE () function in the formula field' },
      { letter: 'D', text: 'The NOW () function in the formula field' }
    ],
    answers: ['B', 'D'],
    explanation: "A formula field cannot be referenced by a roll-up summary field if it contains a cross-object field reference or a time-based function. A cross-object field reference is a reference to a field from a different object, such as Account. Name on a Contact object. A time-based function is a function that returns the current date or time, such as NOW() or TODAY(). Option A and C do not prevent a formula field from being referenced by a roll-up summary field."
  },
  {
    question: "Universal Containers wants to create a custom checkbox formula field on the Opportunity object. This formula should evaluate to TRUE if the following conditions are met:\nStage is set to Negotiation/Review\nClose Date is less than 1 week away\nWhich formula meets these requirements?",
    options: [
      { letter: 'A', text: 'AND(ISPICKVAL(StageName, \'Negotiation/Review\'), CloseDate - 7 < TODAY())' },
      { letter: 'B', text: 'AND(StageName = "Negotiation/Review", CloseDate - 7 < TODAY())' },
      { letter: 'C', text: 'AND(StageName = \'Negotiation/Review\', CloseDate - DAY(7) < TODAY())' },
      { letter: 'D', text: 'AND(ISPICKVAL(StageName, \'Negotiation/Review\'), CloseDate - DAY(7) < TODAY())' }
    ],
    answers: ['A'],
    explanation: "To test a picklist field in a formula, ISPICKVAL must be used. To check if the CloseDate is within 7 days of the current date, you can use simple date arithmetic (CloseDate - 7 < TODAY()). Why A is correct: Exact Extract: \"Use ISPICKVAL to determine if a picklist field has a specific value.\". \"Date formulas can use arithmetic to compare a date to TODAY(). For example, CloseDate - 7 < TODAY() returns TRUE if CloseDate is within the next week.\". Why not B: Picklist fields cannot be compared with =; this formula would fail to compile. Why not C or D: The function DAY() returns the day of the month from a date - not a duration. DAY(7) is invalid in this context."
  },
  {
    question: "Universal Containers (UC) has a time-sensitive need for a custom component to be built in 4 weeks; UC developers require additional enablement to complete the work and are backlogged by several months. Which option should an app builder suggest to meet this requirement?",
    options: [
      { letter: 'A', text: 'Use an AppExchange solution.' },
      { letter: 'B', text: 'Build a screen flow page.' },
      { letter: 'C', text: 'Build a Lightning record page.' },
      { letter: 'D', text: 'Use a Boit solution' }
    ],
    answers: ['A'],
    explanation: "An AppExchange solution is a pre-built application or component that can be installed from the Salesforce AppExchange, which is an online marketplace for Salesforce products. AppExchange solutions can help you meet your business needs quickly and efficiently, without requiring much development effort or expertise. You can browse and search for AppExchange solutions by category, industry, rating, price, and more."
  },
  {
    question: "An app builder wants to update a field on the parent record when a child record connected via lookup is deleted. What automation should the app builder use?",
    options: [
      { letter: 'A', text: 'Screen flow' },
      { letter: 'B', text: 'Process Builder' },
      { letter: 'C', text: 'Apex code' },
      { letter: 'D', text: 'Workflow rule' }
    ],
    answers: ['C'],
    explanation: "The app builder should use Apex code to update a field on the parent record when a child record connected via lookup is deleted. Apex code is a programming language that allows developers to execute complex logic on the Salesforce platform. Apex code can be triggered by certain events, such as insert, update, delete, or undelete of records. In this case, the app builder can write an Apex trigger that runs after a child record is deleted and updates a field on the parent record accordingly. Option A, B, and D are not automation tools that can perform this task."
  },
  {
    question: "Universal Containers has a single Contact Lightning record page. A component takes up a lot of room on the page and is NOT needed by users with a Marketing profile. What should the app builder use to solve this Issue?",
    options: [
      { letter: 'A', text: 'Detail page layouts' },
      { letter: 'B', text: 'Component visibility filter' },
      { letter: 'C', text: 'Field-level security' },
      { letter: 'D', text: 'AppExchange' }
    ],
    answers: ['B'],
    explanation: "The feature that the app builder should use to solve this issue is component visibility filter. A component visibility filter is a setting that can be applied to a Lightning component on a record page to control when the component is hidden or displayed based on certain conditions. The app builder can use a component visibility filter to hide the component from users with a Marketing profile. Option A is incorrect because detail page layouts are not related to Lightning components, but rather the fields and related lists that appear on record detail pages. Option C is incorrect because field-level security is not related to Lightning components, but rather the access level of fields for different profiles or permission sets. Option D is incorrect because AppExchange is not related to Lightning components, but rather an online marketplace where users can find and install apps and components."
  },
  {
    question: "An App Builder is loading the data into salesforce. To link the new records back to the legacy system, a field will be used to track the legacy ID on the account object. For future data loads this ID will be used when upserting records. Which field attribute should be selected? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Unique' },
      { letter: 'B', text: 'Required' },
      { letter: 'C', text: 'External ID' },
      { letter: 'D', text: 'Text (encrypted)' }
    ],
    answers: ['A', 'C'],
    explanation: "The field attribute that should be selected are Unique and External ID. Unique means that the field will not allow duplicate values. External ID means that the field can be used as a foreign key for data imports and upserts. Option B is incorrect because Required means that the field must have a value and cannot be left blank, which is not necessary for this requirement. Option D is incorrect because Text (encrypted) means that the field will store sensitive data in an encrypted format, which is not necessary for this requirement."
  },
  {
    question: "Where can an app builder edit an existing app to add components to the utility bar?",
    options: [
      { letter: 'A', text: 'App Menu' },
      { letter: 'B', text: 'Lightning App Builder' },
      { letter: 'C', text: 'App Manager' },
      { letter: 'D', text: 'Lightning Record Page' }
    ],
    answers: ['C'],
    explanation: "To add components to the utility bar of an existing app: C . App Manager. This is where Salesforce apps are configured, including the utility bar which can house components like a chat tool, recent items list, or custom Lightning components. Steps to edit an app's utility bar: Navigate to Setup → App Manager. Locate the desired app and click on the dropdown next to it → select Edit. In the App Builder, navigate to the Utility Items tab. Click 'Add' to include new components to the utility bar. Configure the properties of the utility item as needed. Save the app configuration."
  },
  {
    question: "Universal Containers has a private sharing model for Accounts and Opportunities and uses Territory Management to grant access to records.\n* Sales rep A manually shares an opportunity record with sales rep B.\n* Sales rep B has access to the Account even though the Account Is NOT In sales rep B's territory.\n* Sales rep C CANNOT see either record.\nBased on the information given, why can sales rep B see the Account related to the Opportunity?",
    options: [
      { letter: 'A', text: 'Sales rep B has implicit access to the Account.' },
      { letter: 'B', text: 'Sales rep B was added to the Account team.' },
      { letter: 'C', text: 'Sharing set is granting access to the Account.' },
      { letter: 'D', text: 'Account was also manually shared.' }
    ],
    answers: ['A'],
    explanation: "Sales rep B has implicit access to the Account because of the manual sharing of the Opportunity. Implicit sharing grants access to parent records when a user has access to a child record. Sales rep B was not added to the Account team, sharing set is not applicable for private sharing model, and Account was not manually shared."
  },
  {
    question: "Universal Containers is adding drone delivery to service offerings, and the developer has written and tested code prior to deployment to production, and the change set is ready to go. The deployment window will occur when the developer is on vacation. What can the app builder do to ensure a smooth deployment to production?",
    options: [
      { letter: 'A', text: 'Remove Apex classes from Abound change set.' },
      { letter: 'B', text: 'Validate the inbound change set.' },
      { letter: 'C', text: 'Use a metadata package set.' },
      { letter: 'D', text: 'Validate the outbound change set.' }
    ],
    answers: ['B'],
    explanation: "The app builder should validate the inbound change set to ensure a smooth deployment to production. Validating an inbound change set allows the app builder to test whether the change set can be deployed without errors in the target org. Validating an inbound change set does not affect any data or metadata in the target org."
  },
  {
    question: "An app builder needs to create new automation on an object. What best practice should the app builder follow when building out automation?",
    options: [
      { letter: 'A', text: 'One Workflow rule per object.' },
      { letter: 'B', text: 'One Flow per object.' },
      { letter: 'C', text: 'One invocable process per object.' },
      { letter: 'D', text: 'One record change process per object.' }
    ],
    answers: ['D'],
    explanation: "The best practice that the app builder should follow when building out automation is one record change process per object. A record change process is a type of process in Process Builder that starts when a record is created or updated. Having one record change process per object can avoid conflicts or errors when multiple processes try to update the same record at the same time. Option A is incorrect because one workflow rule per object is not a best practice, as workflow rules are considered legacy tools and have limitations compared to Process Builder. Option B is incorrect because one flow per object is not a best practice, as flows are more complex and require more resources than processes. Option C is incorrect because one invocable process per object is not a best practice, as invocable processes are used to invoke other processes from within a process or a flow."
  },
  {
    question: "Cloud Kicks is implementing an approval process for opportunities that requires managers to approve all opportunities above $50,000 before they can be marked as Closed Won. Which two delivery methods can a manager utilize to respond to approval requests in the Salesforce mobile app? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Home Screen' },
      { letter: 'B', text: 'In-App Notification' },
      { letter: 'C', text: 'Record Detail' },
      { letter: 'D', text: 'Navigation Menu' }
    ],
    answers: ['B', 'C'],
    explanation: "For managers to respond to approval requests for opportunities above $50,000 in the Salesforce mobile app: B . In-App Notification: Managers receive notifications within the Salesforce mobile app when there is an approval request, allowing them to approve or reject directly from the notification. C . Record Detail: Managers can access the approval request directly from the Opportunity's detail page in the mobile app, where they can review and respond to the request."
  },
  {
    question: "An app builder installs an unmanaged package in a full copy sandbox that is an exact match for production, and now they are ready to install it m production. When the app builder attempts to install the package in production, it fails. Why did the package fail to install?",
    options: [
      { letter: 'A', text: 'Incorrect license types' },
      { letter: 'B', text: 'Package features not compatible' },
      { letter: 'C', text: 'Object limits exceeded' },
      { letter: 'D', text: 'Apex unit test failures' }
    ],
    answers: ['D'],
    explanation: "Apex unit test failures can cause a package installation to fail. According to the Salesforce documentation, \"If your package contains Apex code, all tests must complete successfully for your package to install.\". Incorrect license types, package features not compatible, and object limits exceeded are not valid reasons for a package installation failure."
  },
  {
    question: "Ursa Major Solar (UMS) uses a public sharing model for accounts. UMS would like to move to a more restrictive sharing model but wants the Sales team to continue to have access to all account records with the sales record type. Which two actions should an app builder complete to implement this change? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Update the Sales profile.' },
      { letter: 'B', text: 'Update the organization-wide defaults' },
      { letter: 'C', text: 'Create a criteria-based sharing rule.' },
      { letter: 'D', text: 'Create an owner-based sharing rule.' }
    ],
    answers: ['B', 'C'],
    explanation: "Update the organization-wide defaults and create a criteria based sharing rule are two actions that an app builder should complete to implement the change of moving to a more restrictive sharing model while allowing the Sales team to access all account records with the sales record type. Updating the organization-wide defaults can set the baseline level of access for accounts, and creating a criteria based sharing rule can grant additional access based on record type. Updating the Sales profile and creating an owner-based sharing rule are not necessary or sufficient actions for this change."
  },
  {
    question: "After utilizing the Lightning Object Creator to create a new object, its fields, and to insert all of the data, an app builder now needs to set up the Lightning Record Page. Which component should the app builder have on their Lightning Record Page to see all of the fields from the page layout?",
    options: [
      { letter: 'A', text: 'Highlights Panel' },
      { letter: 'B', text: 'Recommendations' },
      { letter: 'C', text: 'Record Detail' },
      { letter: 'D', text: 'Path' }
    ],
    answers: ['C'],
    explanation: "For an app builder who needs to ensure all fields from the page layout are visible on a Lightning Record Page after using the Lightning Object Creator, the correct component to use is: Record Detail (C). The Record Detail component automatically displays all fields that are included on the assigned page layout for the object. It is designed to reflect the layout configuration and is the simplest way to ensure all fields are presented as configured in the layout editor. Highlights Panel (A) is used primarily to display key fields at the top of the record page, providing a summary view rather than full field visibility. Recommendations (B) is used for displaying prompts or suggestions and does not display record fields. Path (D) is useful for displaying stages in a process (like sales stages or service processes) and does not show field data directly."
  },
  {
    question: "Managers at Universal Containers want a quick way to create additional accounts to form a hierarchy from a Parent Account record They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly. What should the app builder recommend?",
    options: [
      { letter: 'A', text: 'Add Path on Account hierarchy' },
      { letter: 'B', text: 'Add a custom link on Account' },
      { letter: 'C', text: 'Customize a Global Quick Action' },
      { letter: 'D', text: 'A Create a custom action' }
    ],
    answers: ['D'],
    explanation: "Create a custom action is the recommended solution to meet the requirement of creating additional accounts to form a hierarchy from a Parent Account record. According to the Salesforce documentation, \"Actions let users quickly create or update records, log calls, send emails, and more, in the context of a particular object.\". A custom action can auto-populate fields based on the parent account and make it easier for users to create child accounts. Add Path on Account hierarchy, add a custom link on Account, and customize a Global Quick Action are not valid or feasible options."
  },
  {
    question: "Universal Containers has Public Read/Write as the Account organization-wide default (OWD) setting. Visitors to the customer community site report that they can see all of the company's account records. How should an app builder configure Account sharing so that community users only see their own Account?",
    options: [
      { letter: 'A', text: 'Create an account record type for external accounts.' },
      { letter: 'B', text: 'Define an owner-based sharing rule for external accounts.' },
      { letter: 'C', text: 'Define a permission set for external accounts.' },
      { letter: 'D', text: 'Set the account external OWD to private.' }
    ],
    answers: ['D'],
    explanation: "The best way to configure Account sharing so that community users only see their own Account is to set the account external OWD to private. This will restrict the access to Account records for external users based on the sharing rules and criteria. Creating an account record type, defining an owner-based sharing rule, or defining a permission set will not prevent community users from seeing other accounts."
  },
  {
    question: "An app builder needs a custom solution and is considering using either AppExchange or their local developer community. The app builder wants to minimize the need for manual maintenance. What should the app builder consider?",
    options: [
      { letter: 'A', text: 'An open-source custom development' },
      { letter: 'B', text: 'An unmanaged package from AppExchange' },
      { letter: 'C', text: 'An open-source unmanaged package' },
      { letter: 'D', text: 'A managed package from AppExchange' }
    ],
    answers: ['D'],
    explanation: "Managed packages from the AppExchange are designed to provide automatic updates, upgrades, and vendor support, minimizing the need for ongoing manual maintenance by the customer. Why D (Managed Package from AppExchange) is correct: Exact Extract: \"Managed packages are maintained by the provider and can be automatically upgraded. They're ideal for apps distributed and maintained through AppExchange.\". Managed packages allow publishers to push automatic updates and ensure compatibility with future Salesforce releases - minimizing maintenance effort. Why not A (Open-source custom development): Open-source code must be maintained internally by developers. Why not B (Unmanaged package): Unmanaged packages are customer-controlled and do not receive automatic updates. Why not C: Open-source unmanaged packages combine the same issue - no automated support or maintenance."
  },
  {
    question: "Universal Containers generates leads from three different sources: web, trade shows, and partners. Some of the information collected is applicable to all sources, there is also information that is unique to each type of lead. What should an app builder configure to meet these requirements?",
    options: [
      { letter: 'A', text: 'Create three lead record types each with its own page layout containing the relevant fields' },
      { letter: 'B', text: 'Create a partner community and a record type for web and trade show leads' },
      { letter: 'C', text: 'Create three sections on the lead layout and instruct users to collapse the non-relevant fields' },
      { letter: 'D', text: 'Create custom page payouts for each type of lead only containing the relevant fields' }
    ],
    answers: ['A'],
    explanation: "The solution that the app builder should configure to meet these requirements is creating three lead record types each with its own page layout containing the relevant fields. This way, the app builder can customize the fields and sections that appear on each record type based on the source of the lead. Option B is incorrect because creating a partner community and a record type for web and trade show leads does not address the requirement of collecting information that is unique to each type of lead, as partner community users may have different fields and layouts than internal users. Option C is incorrect because creating three sections on the lead layout and instructing users to collapse the non-relevant fields does not address the requirement of collecting information that is unique to each type of lead, as users may still see or enter data in the wrong fields. Option D is incorrect because creating custom page layouts for each type of lead only containing the relevant fields does not address the requirement of collecting information that is applicable to all sources, as users may miss some common fields."
  },
  {
    question: "An app builder needs a custom solution and is considering using community. Ease of updates is the primary consideration. What should the app builder consider?",
    options: [
      { letter: 'A', text: 'A managed package from AppExchange' },
      { letter: 'B', text: 'An unmanaged package from AppExchange' },
      { letter: 'C', text: 'An open-source unmanaged package' },
      { letter: 'D', text: 'An open-source custom development' }
    ],
    answers: ['A'],
    explanation: "A managed package from AppExchange is a custom solution that is developed by a third- party provider and can be installed in Salesforce. A managed package can be easily updated by the provider without affecting the existing functionality or customizations. This makes it suitable for the app builder's requirement of ease of updates. Option B, C, and D are not as easy to update as a managed package."
  },
  {
    question: "An app builder at Universal Containers has been asked to add the Chatter feed to a custom object record page. Which approach should the app builder use?",
    options: [
      { letter: 'A', text: 'Add the standard Chatter feed component.' },
      { letter: 'B', text: 'Add the standard related list component' },
      { letter: 'C', text: 'Add a custom Chatter feed component' },
      { letter: 'D', text: 'Add the Chatter feed component from the AppExchange.' }
    ],
    answers: ['A'],
    explanation: "Add the standard Chatter feed component is how an app builder can add the Chatter feed to a custom object record page. According to the Salesforce documentation, \"The Chatter Feed component displays updates about records in your org.\". Add the standard related list component, add a custom Chatter feed component, and add the Chatter feed component from the AppExchange are not valid or necessary options."
  },
  {
    question: "Northern Trail Outfitters wants to broadcast an email to 7,000 contacts Salesforce on a regular basis but realizes Salesforce is mass functionality has a limitation on the number erf emails that can be sent each day. What action should the app builder take?",
    options: [
      { letter: 'A', text: 'Request Salesforce increase the number of maximum daily emails.' },
      { letter: 'B', text: 'Develop Apex code and bghtnrrvg web component to send dairy emails' },
      { letter: 'C', text: 'Research and evaluate products available on AppExchange to send mass emails.' },
      { letter: 'D', text: 'Export Contacts to a CSV file and use an email client to send the emails.' }
    ],
    answers: ['C'],
    explanation: "Research and evaluate products available on AppExchange to send mass emails is the action that the app builder should take to meet the requirement of broadcasting an email to 7,000 contacts in Salesforce on a regular basis. AppExchange is a marketplace where app builders can find products or solutions that can extend Salesforce functionality. There are many products on AppExchange that can send mass emails without hitting the Salesforce limit. Request Salesforce increase the number of maximum daily emails, develop Apex code and Lightning web component to send daily emails, and export Contacts to a CSV file and use an email client to send the emails are not valid or recommended actions."
  },
  {
    question: "Universal Containers (UC) requires that all users specify a contract is sent on each Opportunity prior to marking it as \"Closed Won\". UC wants to be able to report on how many Opportunities have sent Contracts compared to how many have a missing contract when the Opportunities closed. Which field type should an app builder configure to fulfill this requirement?",
    options: [
      { letter: 'A', text: 'Text' },
      { letter: 'B', text: 'Text Area' },
      { letter: 'C', text: 'Picklise' },
      { letter: 'D', text: 'Checkbox. This field type allows users to clearly indicate (Yes/No) whether a contract has been sent. This binary nature of checkboxes makes it simple to filter and report on Opportunities based on whether a contract was sent.' }
    ],
    answers: ['D'],
    explanation: "For tracking whether contracts have been sent for Opportunities: Checkbox. This field type allows users to clearly indicate (Yes/No) whether a contract has been sent. This binary nature of checkboxes makes it simple to filter and report on Opportunities based on whether a contract was sent. Steps to configure this field: Navigate to Setup → Object Manager → Opportunity. Click Fields & Relationships → New → Checkbox. Define the field with a label (e.g., Contract Sent). Set the default value to false (unchecked). Add the field to the relevant page layouts. This setup facilitates accurate reporting and ensures that opportunities cannot be marked as \"Closed Won\" without indicating whether a contract was sent."
  },
  {
    question: "An app builder at Ursa Major Solar has been working on a new custom app in a sandbox that has been upgraded to the next major Salesforce version, and their production instance is still on the current Salesforce version. The development is complete and they are ready to deploy a change set. What should the app builder consider when planning the deployment?",
    options: [
      { letter: 'A', text: 'It will fall if there is a feature only available in the next version.' },
      { letter: 'B', text: 'The change set components will be upgraded to the next version in production.' },
      { letter: 'C', text: 'The change set will be automatically deployed when production is upgraded.' },
      { letter: 'D', text: 'The deployment is not possible due to different versions.' }
    ],
    answers: ['A'],
    explanation: "It will fail if there is a feature only available in the next version. According to the Salesforce documentation, \"If your sandbox is on a newer version than your production org, you can't deploy any components that are new in the sandbox version.\". The change set components will not be upgraded to the next version in production, the change set will not be automatically deployed when production is upgraded, and the deployment is possible if there are no new features involved."
  },{
    question: "A production org includes custom objects containing confidential Information. A sandbox h needed that Includes data records, excludes all of the confidential objects, and can be refreshed weekly the confidential objects, and can be refreshed weekly. What steps should an App Builder take to meet these requirements?",
    options: [
      { letter: 'A', text: 'Create a Full Sandbox and use a sandbox template' },
      { letter: 'B', text: 'Create a Developer Pro Sandbox and schedule Data loader to download selected object data weekly.' },
      { letter: 'C', text: 'Create a Partial Copy Sandbox and use a sandbox template.' },
      { letter: 'D', text: 'Create a Developer Sandbox and schedule Data loader to download selected object data weekly.' }
    ],
    answers: ['C'],
    explanation: 'The steps that the app builder should take to meet these requirements are creating a Partial Copy Sandbox and using a sandbox template. A Partial Copy Sandbox can include data records, exclude confidential objects, and be refreshed weekly. A sandbox template can specify which objects and data are copied from the production org to the sandbox org.'
  },
  {
    question: "Cloud Kicks has a sales rep who is stating that their Contact is unavailable for other users to see within Salesforce. In which three ways can an app builder troubleshoot this issue? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Create an Account Sharing Rule to give the users access to all records.' },
      { letter: 'B', text: 'Confirm whether Default Organization-Wide Sharing Settings provide access to the Account.' },
      { letter: 'C', text: 'Review the Contact record and ensure it is linked to an Account.' },
      { letter: 'D', text: 'Verify the users with the issue have access to the Contact object.' },
      { letter: 'E', text: 'Create a new Contact and have the users try again.' }
    ],
    answers: ['B', 'C', 'D'],
    explanation: 'To troubleshoot the issue of a contact being unavailable for other users to see, an app builder should check the following things: Confirm whether Default Organization-Wide Sharing Settings provide access to the Account. This setting determines the baseline level of access that users have to each other\'s records. Review the Contact record and ensure it is linked to an Account. Contacts that are not linked to an account are private and only visible to the owner and administrators. Verify the users with the issue have access to the Contact object. Users need to have at least read permission on the Contact object to view contact records.'
  },
  {
    question: "Universal Containers has a customer base where many customers have the same or similar company names. Which functionality should be configured to improve an end user`s search experience? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Update the account search layout\'s view filter settings.' },
      { letter: 'B', text: 'Update the account search layouts search results columns displayed.' },
      { letter: 'C', text: 'Update the account search filter fields.' },
      { letter: 'D', text: 'Update the account search layouts accounts tab columns displayed.' }
    ],
    answers: ['B', 'C'],
    explanation: 'Updating the account search layouts search results columns displayed and updating the account search filter fields can improve an end user\'s search experience by showing more relevant information and allowing more refined filtering. The view filter settings and the accounts tab columns displayed are not related to the search functionality.'
  },
  {
    question: "Universal Containers wants to understand return on investment for the latest advertising buy. They currently use a private security model for all objects. What should an app builder recommend?",
    options: [
      { letter: 'A', text: 'Utilize Account Hierarchies and Roil-Up Summary fields' },
      { letter: 'B', text: 'Run an opportunities pipeline report' },
      { letter: 'C', text: 'Change to a public security model' },
      { letter: 'D', text: 'Configure Campaign Hierarchies and Campaign statistics' }
    ],
    answers: ['D'],
    explanation: 'For Universal Containers to understand the return on investment (ROI) for their latest advertising buy while using a private security model, the best recommendation is to use Campaign Hierarchies and Campaign statistics. Campaign hierarchies allow Universal Containers to track the effectiveness and ROI of marketing efforts by grouping related campaigns (e.g., advertising buys) under a parent campaign and rolling up key metrics like responses, converted leads, and won opportunities. Campaign statistics provide detailed insights into individual and aggregate campaign performance, helping calculate ROI. This method works well within a private security model since it respects existing sharing rules and access controls.'
  },
  {
    question: "Cloud Kicks (CK) increased its Salesforce development efforts so that it now has multiple custom development efforts happening in parallel. CK's developers and admins perform the custom (rations and have complained that working in one sandbox has led to many problems. They requested a solution in which they can work in at least 20 different sandboxes at once, that all start with the same base configuration and data. What should an app builder use to solve the problem?",
    options: [
      { letter: 'A', text: 'Sandbox refreshes' },
      { letter: 'B', text: 'Full copy sandboxes' },
      { letter: 'C', text: 'Partial copy sandboxes' },
      { letter: 'D', text: 'Sandbox during' }
    ],
    answers: ['C'],
    explanation: 'Partial copy sandboxes provide a testing environment with a subset of production data, allowing multiple development tracks to operate in parallel with a standardized set of test data based on a sandbox template.'
  },
  {
    question: "When an opportunity has a closed date that is pushed more than 30 days, manager approval is required. An approval process is in place but reps frequently forget to submit for approval to run the process. How can an app builder ensure that these opportunities are submitted into the approval process?",
    options: [
      { letter: 'A', text: 'Give the manager the "API Enabled" permission to permit approval responses by email.' },
      { letter: 'B', text: 'Use a validation rule and an email alert to the manager requesting approval.' },
      { letter: 'C', text: 'Submit the record for approval from an automated process.' },
      { letter: 'D', text: 'Change the entry criteria on the approval process to criteria are met and lock the record on initial submission.' }
    ],
    answers: ['C'],
    explanation: 'Sales reps are forgetting to manually submit the record for approval. The correct declarative solution is to automate the submission when conditions are met - in this case, when the Opportunity Close Date is pushed more than 30 days. This can be achieved using Flow Builder or Process Builder to automatically submit the record into the existing approval process. This ensures the approval process runs automatically whenever the rule is triggered, eliminating user dependency.'
  },
  {
    question: "Universal Containers utilizes opportunities and a custom object called Detaited.Sales__c. The company would like to roll sales metrics up to an opportunity for only Detailed.Sales__c records that have their picklist status set to Active. What is the recommended method for the app builder to achieve this request?",
    options: [
      { letter: 'A', text: 'Utilize the AppExchange to download a third-party application that can roll_up the sales dollars with the appropriate filter.' },
      { letter: 'B', text: 'Create a master-detail relationship between the parent and child object with a roll-up summary field that fitters on the status held.' },
      { letter: 'C', text: 'Create a lookup relationship between the parent and child object with a roll-up summary held that filters on the status field.' },
      { letter: 'D', text: 'Utilize Apex code to roll up the desired amounts.' }
    ],
    answers: ['B'],
    explanation: 'Create a master-detail relationship between the parent and child object with a roll-up summary field that filters on the status field is the recommended method for the app builder to achieve the request of rolling up sales metrics to an opportunity for only Detailed.Sales__c records that have their picklist status set to Active. A roll-up summary field can filter on a field value of the child records and sum up only those records that match the criteria.'
  },
  {
    question: "Cloud Kicks wants to summarize the number of open Cases related to an Account, as well as the number of closed Cases to indicate whether customer support utilization is high, medium, or low. Two number fields have been created: NUM_Open_Cases__c and NUM_Closed_Cases_c Which two automation solutions would meet these business requirements? Choose 2 answers",
    options: [
      { letter: 'A', text: 'AppExchange' },
      { letter: 'B', text: 'Validation Rule' },
      { letter: 'C', text: 'Approval Process' },
      { letter: 'D', text: 'Apex' }
    ],
    answers: ['A', 'D'],
    explanation: 'To meet the requirement of summarizing the number of open and closed cases on an Account, two potential automation solutions can be used: Salesforce AppExchange offers various pre-built apps and components, including those for case management, which could provide the functionality to summarize cases and categorize customer support utilization. Alternatively, Apex could be used to create a trigger or scheduled job that calculates the number of open and closed cases and updates the Account record accordingly. Apex would allow full customization of how the open/closed case numbers are calculated and how customer support utilization is determined.'
  },
  {
    question: "Cloud Kicks (CK) tracks the support level of its customers on the account record page. CK wants to show a text notification on a case record page when the related account is a platinum-level customer. How could an app builder meet this requirement?",
    options: [
      { letter: 'A', text: 'Add a rich text area to the Case Lighting page > Set the component visibility of the rich text area to show when the account support level is platinum.' },
      { letter: 'B', text: 'Create a text-only Visualforce page > Drag the Visualforce component into the Case page layout > Set its visibility to show when the account support level is platinum.' },
      { letter: 'C', text: 'Create a text-only Visualforce page > Clone the case page layout > Drag the Visualforce component into the page, and assign the layout to platinum cases.' },
      { letter: 'D', text: 'Clone the Case Lightning page > Add a rich text area to the new page, and assign this page to platinum accounts.' }
    ],
    answers: ['B'],
    explanation: 'A text-only Visualforce page can be used to show a text notification on a case record page based on a condition. The Visualforce component can be dragged into the Case Lightning page and its visibility can be set to show when the account support level is platinum. This is the simplest and most flexible way to meet the requirement.'
  },
  {
    question: "Universal Container's sales reps can modify fields on an opportunity until it is closed. The sales operations team has access to modify the Post-Close Follow-up Date and Post-Close Follow-up Comments fields after the opportunity is closed. After the opportunity is closed, the rest of the fields are read only. How should these requirements be met?",
    options: [
      { letter: 'A', text: 'Use record types with field sets and restrict editing fields using field-level security.' },
      { letter: 'B', text: 'Use field-level security on page layouts to restrict editing fields.' },
      { letter: 'C', text: 'Use field-level security on page layouts with record types to restrict editing fields,' },
      { letter: 'D', text: 'Use field-level security to mark fields as read-only on the Sales profile.' }
    ],
    answers: ['C'],
    explanation: 'To manage field editability based on the opportunity status, use field-level security on page layouts with record types to restrict editing fields. This combination allows for different layouts and editable fields based on the status of the record (e.g., closed or open). You can create specific page layouts for open and closed record types, making the majority of fields read-only on the closed layout except for the necessary post-close fields.'
  },
  {
    question: "Universal containers (uc) want to delete data in several fields for 5000 lead records. UC export the selected record IDs and fields that need to have data deleted in a csv file. Which two steps should an app builder suggest to meet these requirements? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Select the correct record type' },
      { letter: 'B', text: 'Use import Wizard to update leads using the CSV file' },
      { letter: 'C', text: 'Select insert null values in settings.' },
      { letter: 'D', text: 'Use Data Loader to update leads using the CSV file' }
    ],
    answers: ['C', 'D'],
    explanation: 'The two steps that should be suggested to meet these requirements are to select insert null values in settings and to use Data Loader to update leads using the CSV file. Selecting insert null values in settings will allow Data Loader to overwrite existing values with null values. Data Loader is a tool that can import, export, update, or delete large amounts of data.'
  },
  {
    question: "Universal Containers is piloting new features in an existing sandbox and wants to prevent outbound email sends during testing. What should the app builder do to meet the requirement?",
    options: [
      { letter: 'A', text: 'Email deliverability set to system email only.' },
      { letter: 'B', text: 'Email configured for SMTP authentication.' },
      { letter: 'C', text: 'Email relay to the configured host enabled.' },
      { letter: 'D', text: 'Email deliverability set to no access.' }
    ],
    answers: ['D'],
    explanation: 'Setting email deliverability to no access would prevent outbound email sends during testing in a sandbox. This would ensure that no emails are sent to any users or external email addresses from the sandbox. Setting email deliverability to system email only would still allow some emails to be sent, such as password reset emails or new user emails.'
  },
  {
    question: "The app builder at Ursa Major Solar has just created a master-detail relationship between a parent object Galaxy__c and child object Star__c. What would be the effect of creating this type of relationship if users want to report on Galaxy__c with Star__c?",
    options: [
      { letter: 'A', text: 'A Star__c report typewith Galaxy__c as a field will be automatically created.' },
      { letter: 'B', text: 'A new custom report type will need to be created for Star__c with lookup fields from Galaxy__c.' },
      { letter: 'C', text: 'A Galaxy__c with Star__c report type will be automatically created.' },
      { letter: 'D', text: 'A new custom report type will need to be created for Galaxy__c with Star__c.' }
    ],
    answers: ['C'],
    explanation: 'A master-detail relationship between two objects automatically creates a report type that includes both objects. The app builder does not need to create a custom report type for this scenario. The report type will have the format of Parent object with Child object.'
  },
  {
    question: "Universal Containers is expecting impacts to operations due to increased demand. The executive team will be reaching out to current customers and want to see the number of open cases for the account and parent account. Which two tools could an app builder combine to display the number of open cases on the account page? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Flow' },
      { letter: 'B', text: 'Workflow' },
      { letter: 'C', text: 'Approval Process' },
      { letter: 'D', text: 'Process Builder' }
    ],
    answers: ['A', 'D'],
    explanation: 'The two tools that an app builder could combine to display the number of open cases on the account page are Flow and Process Builder. Flow is a tool that allows the app builder to create a declarative automation that can query, manipulate, and display data from multiple objects. Process Builder is a tool that allows the app builder to create a trigger-based automation that can invoke a Flow when a record is created or updated.'
  },
  {
    question: "What should an app builder consider when choosing a template for a new Lightning record page?",
    options: [
      { letter: 'A', text: 'The template is unable to be changed after the initial save.' },
      { letter: 'B', text: 'To view the record page, users need "View All Data" permissions for the object.' },
      { letter: 'C', text: 'A Page structure will automatically adapt to the device being used to view the record page.' },
      { letter: 'D', text: 'Select a new template for each type of device users use to view the record page.' }
    ],
    answers: ['C'],
    explanation: 'A template for a new Lightning record page determines how the page is divided into regions. The template is responsive and will automatically adapt to the device being used to view the record page.'
  },
  {
    question: "An app Builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another App Builder creates a workflow rule with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco. What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
    options: [
      { letter: 'A', text: 'The record will save and the Industry field will change to Technology' },
      { letter: 'B', text: 'The record will not save and the validation rule\'s error messagewill be displayed' },
      { letter: 'C', text: 'The record will not save and no error message will be displayed' },
      { letter: 'D', text: 'The record will save but the Industry field will not change to Technology' }
    ],
    answers: ['B'],
    explanation: 'The record will not save and the validation rule\'s error message will be displayed because the field update will violate the validation rule. The validation rule will prevent the record from being saved if the Industry field is longer than 6 characters, and Technology is 10 characters long.'
  },
  {
    question: "An app builder has downloaded a component from the AppExchange successfully; however, they are unable to add it to the Lightning home page. Which two reasons can be preventing the app builder from being able to add the custom component? Choose 2 answers",
    options: [
      { letter: 'A', text: 'My Domain must be deployed to add custom components to the page with the App Builder.' },
      { letter: 'B', text: 'A custom tab must be created to add custom components to the page with the App Builder.' },
      { letter: 'C', text: 'The component requires a developer permission to add it to the page with the App Builder.' },
      { letter: 'D', text: 'The component is tagged for record pages instead of home pages and is not showing up in the App Builder.' }
    ],
    answers: ['A', 'D'],
    explanation: 'Two reasons that can prevent an app builder from adding a custom component to the Lightning home page are if My Domain is not deployed, or if the component is tagged for record pages instead of home pages. My Domain must be deployed to add custom components to the page with the App Builder, as it enables Lightning components and other features. The component must be tagged for home pages in its configuration file, otherwise it will not show up in the App Builder for home pages.'
  },
  {
    question: "Which three standard component types are available in the Lightning App Builder? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Plain text' },
      { letter: 'B', text: 'Rich text' },
      { letter: 'C', text: 'Filter list' },
      { letter: 'D', text: 'Report details' },
      { letter: 'E', text: 'Recent items' }
    ],
    answers: ['B', 'D', 'E'],
    explanation: 'In the Lightning App Builder, the following standard components can be used to enhance the functionality of Lightning pages: Rich text: Allows the inclusion of formatted text, links, and images on a page. Report details: Enables embedding of specific report details directly on a page. Recent items: Displays a list of recently accessed items relevant to the user.'
  },
  {
    question: "Universal Containers (UC) tracks Account locations in Zip Code, a custom text field with a validation rule to enforce proper formatting of the US ZIP+4 code for UC's orders. What formula should the app builder create on Order to display only the first five digits of Zip Code from the parent Account?",
    options: [
      { letter: 'A', text: 'BEGINS(Account.Zip_Code_r, 5)' },
      { letter: 'B', text: 'TEXT(Account.Zip_Code_c, 5)' },
      { letter: 'C', text: 'LEFT(Account.Zip_Code_c, 5)' },
      { letter: 'D', text: 'LPAD(Account.Zip_Code__r, 5)' }
    ],
    answers: ['C'],
    explanation: 'LEFT(Account.Zip_Code_c, 5) is the correct formula to display only the first five digits of Zip Code from the parent Account. LEFT function returns the specified number of characters from the left side of a text string. Account.Zip_Code_c is the custom text field that stores the Zip Code on Account object. 5 is the number of characters to return from the left side of the Zip Code.'
  },
  {
    question: "Properly installing managed packages helps prevent conflicts with customizations made by customers and partners. What functionality should be used to set up packages?",
    options: [
      { letter: 'A', text: 'Description' },
      { letter: 'B', text: 'Allow sharing' },
      { letter: 'C', text: 'Help setting' },
      { letter: 'D', text: 'Namespace' }
    ],
    answers: ['D'],
    explanation: 'The functionality that should be used to set up packages is namespace. A namespace is a unique identifier that distinguishes one package from another and prevents naming conflicts with other packages or customizations. A namespace also allows developers to expose their code or components for use by other developers through APIs or web services.'
  },
  {
    question: "Universal Containers implemented an application process that uses custom objects Internships and Applications. The organization-wide default for Internships has been set to private and is the master in the master-detail relationship with Applications. The VP of HR wants to allow edit access to Applications to recruiters. How should an app builder configure the proper access?",
    options: [
      { letter: 'A', text: 'Set the organization-wide default on the Applications object to Read/Write.' },
      { letter: 'B', text: 'Add a sharing rule that grants the users Read/Write access to the Internship records.' },
      { letter: 'C', text: 'Create a queue for the web applications and assign access to the users who will be editing the records.' },
      { letter: 'D', text: 'Create a sharing rule that grants the users Read/Write access to the Application records.' }
    ],
    answers: ['D'],
    explanation: "The app builder should create a sharing rule that grants the users Read/Write access to the Application records. A sharing rule is a type of rule that can extend record access to groups of users based on certain criteria. In this case, the app builder can create a sharing rule that grants Read/Write access to the Application object to the recruiters based on their role, public group, or queue. This will allow them to edit the Application records related to any Internship record, regardless of the ownership. Option A, B, and C are not ways to configure the proper access."
  },
  {
    question: "Cloud Kicks (CK) Is finding sales reps are Inconsistent in data entry when deals are won. CK requires that custom shoes are shipped within two weeks after the close date. A custom field called Scheduled Ship Date on the opportunity records the ship date.How should the app butler ensure this field is properly filed out before setting the opportunity to closed won?",
    options: [
      { letter: 'A', text: 'OR(ISPICKVAL( StageName ,"Closed Won") && ( Scheduled_Ship_Date_cCloseDate)>14,ISBLANK(Scheduled_Ship_Date_c))' },
      { letter: 'B', text: 'OR(ISPICKVAL( StageName ="Closed Won") && ( Scheduled_Ship_Date__c- CloseDate ) > 14,ISBLANK(Scheduled_Ship_Date__c))' },
      { letter: 'C', text: 'ISPICKVAL( StageName ,"Closed Won") && ( Scheduled _Ship_Date_c-CloseDate ) > 14' },
      { letter: 'D', text: 'ISPICKVAL( StageName= CloseDate ) > 14,losed Won") && ( CloseDateScheduled_Ship_Date_c) >14' }
    ],
    answers: ['A'],
    explanation: "The correct validation rule formula to ensure that the Scheduled Ship Date field is properly filled out before setting the Opportunity to Closed Won is: OR(ISPICKVAL( StageName ,\"Closed Won\") && ( Scheduled_Ship_Date_cCloseDate)>14,ISBLANK(Scheduled_Ship_Date_c)). This formula checks two conditions: if the StageName is Closed Won and the Scheduled Ship Date is more than 14 days after the Close Date, or if the Scheduled Ship Date is blank. If either condition is true, the validation rule will fire and prevent saving the record. The other formulas are incorrect because they either use incorrect syntax (such as \"=\" instead of \",\" or missing parentheses) or incorrect logic (such as checking if the Scheduled Ship Date is less than 14 days after the Close Date)."
  },
  {
    question: "Universal Containers wants users to have access to the pricing guidelines document when viewing a Contract related to an Account. What feature should an app builder use to create easy access to the document?",
    options: [
      { letter: 'A', text: 'Quick Action on the Contracts object' },
      { letter: 'B', text: 'Quick Action on the Account object' },
      { letter: 'C', text: 'A custom detail page link on the Account object' },
      { letter: 'D', text: 'A custom detail page link on the Contract object' }
    ],
    answers: ['D'],
    explanation: "The feature that the app builder should use to create easy access to the document is a custom detail page link on the Contract object. A custom detail page link is a type of custom button or link that can display a URL or execute JavaScript when clicked. The app builder can create a custom detail page link on the Contract object that displays the pricing guidelines document in a new window or tab. Option A is incorrect because a quick action on the Contracts object is not suitable for this requirement, as quick actions are used to create or update records, log calls, send emails, or launch flows. Option B is incorrect because a quick action on the Account object is not suitable for this requirement, as quick actions are not related to the Contract object. Option C is incorrect because a custom detail page link on the Account object is not suitable for this requirement, as custom detail page links are not related to the Contract object."
  },
  {
    question: "Universal Containers would like to embed a chart of all related Opportunities, by stage, on the Account detail page. Which type of report should the App Builder create to add to the Account page layout?",
    options: [
      { letter: 'A', text: 'A summary report on the Opportunity object.' },
      { letter: 'B', text: 'A summary report on the Account object.' },
      { letter: 'C', text: 'A tabular report on the Account object.' },
      { letter: 'D', text: 'A tabular report on the Opportunity object.' }
    ],
    answers: ['A'],
    explanation: "A summary report on the opportunity object should be created to add to the account page layout. A summary report groups rows of data by common values and allows users to create charts based on aggregate values. A summary report on the opportunity object can group opportunities by stage and display a chart of all related opportunities on the account detail page."
  },
  {
    question: "Universal Containers wants to deliver purchased containers to remote construction address. In these cases, the customers will supply UC with the coordinates to the location. What type of field should the app builder use to capture this information?",
    options: [
      { letter: 'A', text: 'Number' },
      { letter: 'B', text: 'Geo location' },
      { letter: 'C', text: 'Text' },
      { letter: 'D', text: 'External Lookup' }
    ],
    answers: ['B'],
    explanation: "A geolocation field can be used to capture the coordinates of a location in latitude and longitude. This field type can also be used in reports, formulas, validation rules, and Apex."
  },
  {
    question: "Ursa Major Solar's service department gets requests for several types of services, such as installation, repair, and maintenance. Service managers need to be able to tell when maintenance was last done on an asset to help determine if they are meeting contract agreements, but the last maintenance date can be difficult to determine when there are many work orders related to the asset. They think it would be helpful to have a field auto-populated on the Asset record when a maintenance work order gets closed. Which tool should an app builder recommend to help meet this requirement?",
    options: [
      { letter: 'A', text: 'Einstein Next Best Action' },
      { letter: 'B', text: 'Roll-up Summary' },
      { letter: 'C', text: 'Apex Trigger' },
      { letter: 'D', text: 'Flow' }
    ],
    answers: ['D'],
    explanation: "The requirement is to auto-populate the \"Last Maintenance Date\" field on the Asset record whenever a Maintenance-type Work Order is closed. This can be achieved declaratively using Flow - specifically, a Record-Triggered Flow that updates the parent record (Asset). Why D (Flow) is correct: Exact Extract: \"Record-triggered flows can update related records when specific changes occur, such as when a Work Order's status is updated to Closed.\". In this scenario, the flow can: Trigger when a Work Order is updated to \"Closed.\" Check if Type = \"Maintenance.\" Update the related Asset record's Last Maintenance Date field with the Work Order's Closed Date. Why not B (Roll-up Summary): Roll-up summary fields can only summarize numeric or date values using MIN, MAX, COUNT, or SUM, but only on Master-Detail relationships. Work Order → Asset is a Lookup relationship, so roll-up summaries are not supported natively. Why not A (Einstein Next Best Action): NBA provides recommendations, not field updates. Why not C (Apex Trigger): Apex could achieve this, but Salesforce recommends Flow first as a best practice."
  },
  {
    question: "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce Mobile App. What should be used to accomplish this?",
    options: [
      { letter: 'A', text: 'Custom action' },
      { letter: 'B', text: 'Custom button' },
      { letter: 'C', text: 'Custom quick access link' },
      { letter: 'D', text: 'Custom URL formula Field' }
    ],
    answers: ['A'],
    explanation: "To allow quick editing of a record's status and entering a due date from the record's feed in the Salesforce Mobile App: A . Custom action. This option enables users to perform specific tasks directly from the record page in the Salesforce Mobile App, such as editing fields. Steps to create a custom action: Navigate to Setup → Object Manager → select the relevant object. Click Buttons, Links, and Actions → New Action. Set Action Type to 'Update a Record'. Configure the action layout to include the Status and Custom Due Date fields. Add the action to the Salesforce Mobile layout. This setup provides an efficient way for users to update key fields without navigating away from the record feed."
  },
  {
    question: "The Universal Containers data manager has been complaining about the lack of data integrity on Contact records. Sales reps have not been filling out the Region field. The data manager wants the Region field filled out only for Contacts that are associated to Accounts that have been marked as 'High Priority' on the Customer Status field. What can the app builder do to fulfill this requirement?",
    options: [
      { letter: 'A', text: 'Make the Region field required on Contact.' },
      { letter: 'B', text: 'Create a validation rule on Contact.' },
      { letter: 'C', text: 'Create 4 validation rule on Account.' },
      { letter: 'D', text: 'Make the Customer Status field required or Account.' }
    ],
    answers: ['B'],
    explanation: "To ensure data integrity where the Region field on the Contact object needs to be filled out conditionally based on the parent Account's status, a validation rule on the Contact is the most effective method: B . Create a validation rule on Contact. This rule can enforce that the Region field must be filled out for Contacts related to Accounts marked as 'High Priority'. Steps to create this validation rule: Navigate to Setup → Object Manager → Contact → Validation Rules. Create a new validation rule. In the formula, use: AND( ISPICKVAL(Account.Customer_Status__c, 'High Priority'), ISBLANK(Region__c) ). Provide an error message to display when the rule is violated. Save and activate the rule. This validation rule checks that if a Contact is associated with an Account marked 'High Priority', the Region field cannot be blank."
  },
  {
    question: "An app builder needs to change the data type of some custom fields. Which two limitations should the app builder be aware of when changing the data type of a custom field? Choose 2 answers",
    options: [
      { letter: 'A', text: 'It is not possible to change the data type of a formula field to any data type.' },
      { letter: 'B', text: 'It is not possible to change the data type of field referenced by Apex code,' },
      { letter: 'C', text: 'It is not possible to change the data type of a field used as an External ID from number to text.' },
      { letter: 'D', text: 'It is not possible to change the data type of a Text Area (Long) field to Text.' }
    ],
    answers: ['A', 'D'],
    explanation: "Changing the data type of custom fields in Salesforce has specific limitations that need to be considered to ensure system integrity and prevent errors: A . It is not possible to change the data type of a formula field to any data type. Formula fields are calculated based on other field values and cannot be converted into a storage data type because they do not store data themselves. D . It is not possible to change the data type of a Text Area (Long) field to Text. Text Area (Long) fields support up to 131,072 characters, which far exceeds the 255 character limit of standard Text fields. Converting such a field to a smaller capacity field would potentially lead to data truncation or loss."
  },
  {
    question: "Universal Containers has deployed custom tabs to Production via changes sets, without including the profile settings or permission sets. What is the settings for the visibility of custom tabs?",
    options: [
      { letter: 'A', text: 'Custom tabs are default off for all users.' },
      { letter: 'B', text: 'Custom tabs are default on for all uses.' },
      { letter: 'C', text: 'Custom tabs are hidden for all users.' },
      { letter: 'D', text: 'Custom tabs are NOT deployed.' }
    ],
    answers: ['A'],
    explanation: "The setting for the visibility of custom tabs is default off for all users when they are deployed via change sets without including the profile settings or permission sets. This means that the custom tabs are not visible in any apps or navigation menus for any users unless they are manually added by each user or by an administrator3. Option B, C, and D are not correct settings for the visibility of custom tabs."
  },
  {
    question: "Universal Containers uses Contracts for agreements with customers. A sales manager is required to provide approval for contracts and director approval for any contract over $10,000. Which two options should an app builder use to ensure all contracts route for the correct approval and also prevent the sales rep from making changes to the record while it is being approved? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Create an approval process on the Contract object with criteria set on a second approval step set as \'Amount__c > 10,000\' and set the approver as director.' },
      { letter: 'B', text: 'Create an approval process on the Contract object and set the field for \'Next Automated Approver Determined By\' as Manager\'.' },
      { letter: 'C', text: 'Create a validation rule on the Contract object that prevents updates to the contract record while it is being reviewed.' },
      { letter: 'D', text: 'Create an approval process on the Contract object with one step for each sales manager that sets the approver as the director.' }
    ],
    answers: ['A', 'C'],
    explanation: "The app builder should use two options to ensure all contracts route for the correct approval and also prevent the sales rep from making changes to the record while it is being approved: Create an approval process on the Contract object with criteria set on a second approval step set as 'Amount__c > 10,000' and set the approver as director. An approval process is a type of process that automates how Salesforce records are approved in an organization. An approval process can have multiple steps with different criteria and approvers. In this case, the app builder can create an approval process on the Contract object with two steps: one for the sales manager approval and one for the director approval if the contract amount is over $10,0001. Create a validation rule on the Contract object that prevents updates to the contract record while it is being reviewed. A validation rule is a type of rule that checks data quality by verifying that the data in a record meets certain standards before it can be saved. A validation rule can prevent users from making changes to a record that is in a certain status or stage. In this case, the app builder can create a validation rule on the Contract object that prevents updates to the contract record if its Approval Status field is not equal to Not Submitted2. Option B and D are not options that can ensure all contracts route for the correct approval and also prevent the sales rep from making changes to the record while it is being approved."
  },
  {
    question: "Cloud Kicks has a sales rep who is stating that their Contact is unavailable for other users to see within Salesforce. In which three ways can an app builder troubleshoot this issue? Choose 3 answers",
    options: [
      { letter: 'A', text: 'Create a new Contact and have the users try again.' },
      { letter: 'B', text: 'Create an Account Sharing Rule to give the users access to all records.' },
      { letter: 'C', text: 'Review the Contact record and ensure it is linked to an Account.' },
      { letter: 'D', text: 'Verify the users with the issue have access to the Contact object.' },
      { letter: 'E', text: 'Confirm whether Default Organization-Wide Sharing Settings provide access to the Account.' }
    ],
    answers: ['C', 'D', 'E'],
    explanation: "To troubleshoot the issue of a contact being unavailable for other users to see, an app builder should check the following things: Confirm whether Default Organization-Wide Sharing Settings provide access to the Account. This setting determines the baseline level of access that users have to each other's records. Review the Contact record and ensure it is linked to an Account. Contacts that are not linked to an account are private and only visible to the owner and administrators. Verify the users with the issue have access to the Contact object. Users need to have at least read permission on the Contact object to view contact records."
  },
  {
    question: "Cloud Kicks (CK) wants to track orders against inventory, ensuring its ability to fulfill order requests. CK created a junction object called Request Inventory to enable many-to-many relationships with the Inventory and Order objects. What does the app builder need to provide to ensure users can view Request Inventory records?",
    options: [
      { letter: 'A', text: 'Read access to both master objects.' },
      { letter: 'B', text: 'Apex-based sharing on the first master object.' },
      { letter: 'C', text: 'Sharing rules on Request Inventory object.' },
      { letter: 'D', text: 'Read access to the first master object.' }
    ],
    answers: ['A'],
    explanation: "To view a junction object record, a user must have at least read access to both master objects. This is because the junction object inherits the sharing and security settings from both master objects."
  },
  {
    question: "Cloud Kicks wants to start tracking how many shoe subscriptions have been sold for each shoe catalog. A master-detail relationship exists between the Subscription__c and the Shoe__c objects. Which type of field should an app builder create?",
    options: [
      { letter: 'A', text: 'Roll-up summary field' },
      { letter: 'B', text: 'Lookup field' },
      { letter: 'C', text: 'Master-detail relationship field' },
      { letter: 'D', text: 'Number field' }
    ],
    answers: ['A'],
    explanation: "To start tracking how many shoe subscriptions have been sold for each shoe catalog, a roll-up summary field should be created. A roll-up summary field calculates values from related records on a master-detail relationship. It can count, sum, min, or max numeric values from child records on a parent record."
  },
  {
    question: "Cloud Kicks wants to efficiently Increase the company's adoption of Salesforce while simultaneously moving away from their reliance on spreadsheets. An app builder is given a spreadsheet everyone is sharing that needs to be added to Salesforce. The object with fields needs to be created and the data inserted simultaneously. Which tool should be used?",
    options: [
      { letter: 'A', text: 'Import Wizard' },
      { letter: 'B', text: 'Lightning Object Creator' },
      { letter: 'C', text: 'Data Loader' },
      { letter: 'D', text: 'Schema Builder' }
    ],
    answers: ['B'],
    explanation: "Lightning Object Creator is a tool that allows app builders to create an object with fields and import data from a spreadsheet simultaneously. Import Wizard and Data Loader are tools for importing data into existing objects, not creating new objects. Schema Builder is a tool for creating and modifying objects and fields, but not importing data."
  },
  {
    question: "Cloud Kicks (CK) switched to Lightning Experience and started using Chatter across its global workforce to support its fast-paced sales cycle. CK loves Chatter but struggle with gathering feedback from core team members, including understanding who is available to respond. Which two ways could CK use Chatter to solve this problem? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Streams' },
      { letter: 'B', text: 'Polls' },
      { letter: 'C', text: 'Out of Office' },
      { letter: 'D', text: 'Topics' }
    ],
    answers: ['B', 'C'],
    explanation: "Polls and Out of Office are two ways that CK can use Chatter to gather feedback and understand availability. Polls allow users to create surveys and collect opinions from other users. Out of Office lets users set a status message and an end date to inform others when they are away or busy. Streams and Topics are not related to the problem."
  },
  {
    question: "A customer service representative at a call center wants to be able to collect information from customers using a series of question prompts. What should an app builder use to accomplish this?",
    options: [
      { letter: 'A', text: 'Approval Process' },
      { letter: 'B', text: 'Flow' },
      { letter: 'C', text: 'Validation Rule' },
      { letter: 'D', text: 'Path' }
    ],
    answers: ['B'],
    explanation: "For a customer service representative to collect information through a series of question prompts: B . Flow. Salesforce Flows allow for the creation of guided interactions that can prompt users for information in a step-by-step manner. Steps to create a flow for this purpose: Navigate to Setup → Flows. Click on 'New Flow' and select a Screen Flow to interactively prompt users. Design the flow with Screen elements for each question. Add logic to process responses as necessary. Save and activate the flow. Embed or link the flow in a relevant location accessible to the service representative, such as on a record page or in the utility bar. Flows provide a flexible and powerful way to interactively gather and process customer data in real time."
  },
  {
    question: "A sales rep at AW Computing is unable to find what they are looking for while scrolling through their Chatter feed. How can a filter be utilized to show only posts from their key account and opportunity records?",
    options: [
      { letter: 'A', text: 'Create a Chatter group.' },
      { letter: 'B', text: 'Create Chatter bookmarks' },
      { letter: 'C', text: 'Create a Chatter stream.' },
      { letter: 'D', text: 'Create a Chatter notification.' }
    ],
    answers: ['C'],
    explanation: "Create a Chatter stream. This is correct because a Chatter stream allows users to follow multiple records and people in one feed, and filter the feed by selecting a stream."
  },
  {
    question: "Sales reps at Universal Containers use Salesforce on their mobile devices. They want a way to odd new contacts quickly and then follow up later to complete the additional Information necessary. What mobile solution should an App Builder recommend?",
    options: [
      { letter: 'A', text: 'Customize the mobile menu to move Contacts to the top.' },
      { letter: 'B', text: 'Build a global action to create Contacts.' },
      { letter: 'C', text: 'Add a compact layout to Contacts.' },
      { letter: 'D', text: 'Use Path and set pre-defined values' }
    ],
    answers: ['B'],
    explanation: "The app builder should recommend building a global action to create Contacts. A global action allows users to create records quickly from any page in Salesforce on their mobile devices. The app builder can also specify predefined values for some fields in the global action, such as Account Name or Phone Number, to make data entry easier for users. Option A is incorrect because customizing the mobile menu to move Contacts to the top does not help users create new contacts quickly or follow up later. Option C is incorrect because adding a compact layout to Contacts does not help users create new contacts quickly or follow up later, but rather shows them more fields on record detail pages or list views. Option D is incorrect because using Path and setting pre-defined values does not help users create new contacts quickly or follow up later, but rather guides them through different stages of a record."
  },
  {
    question: "DreamHouse Realty is rethinking its sandbox utilization strategy after acquiring Cloud Kicks. The Salesforce COE already utilizes a partial and a full sandbox, which it refreshes on their own regular schedules. Teams are expanding and have to begin each of their small projects in a sandbox before committing to the larger pool for collaborative testing while still keeping costs down. What type of sandbox should each team member use?",
    options: [
      { letter: 'A', text: 'Full sandbox' },
      { letter: 'B', text: 'Developer sandbox' },
      { letter: 'C', text: 'Developer pro sandbox' },
      { letter: 'D', text: 'Partial sandbox' }
    ],
    answers: ['B'],
    explanation: "The best type of sandbox for each team member to use is a developer sandbox. A developer sandbox is a copy of production that includes only the metadata, such as objects, fields, layouts, etc. It does not include any data, such as records or attachments. A developer sandbox is ideal for small projects that do not require data testing, such as developing new features or customizations. A developer sandbox has a storage limit of 200 MB and can be refreshed once per day. A developer sandbox is also cheaper than other types of sandboxes. A full sandbox is a copy of production that includes all the metadata and data. It is ideal for large projects that require data testing, such as performance testing or integration testing. A full sandbox has the same storage limit as production and can be refreshed every 29 days. A full sandbox is also the most expensive type of sandbox. A developer pro sandbox is similar to a developer sandbox, but it has a larger storage limit of 1 GB and can be refreshed every 5 days. It is ideal for projects that require some data testing, such as data migration or quality assurance testing. A partial sandbox is similar to a full sandbox, but it has a smaller storage limit of 5 GB and can be refreshed every 5 days. It is ideal for projects that require selective data testing, such as user acceptance testing or staging testing."
  },
  {
    question: "An app builder is tasked with adding key performance indicators on client pages. They want to see a summary of the number of open Opportunities and the number of won Opportunities for each Account. Where should the app builder go to build these new rollups?",
    options: [
      { letter: 'A', text: 'Lightning App Builder' },
      { letter: 'B', text: 'Account Object' },
      { letter: 'C', text: 'Lightning Object Creator' },
      { letter: 'D', text: 'Opportunity Object' }
    ],
    answers: ['B'],
    explanation: "The app builder should go to the Account object to build these new rollups. A roll-up summary field is a type of field that can aggregate numeric values from child records related to a parent record by a master-detail relationship. The app builder can create two roll-up summary fields on the Account object that count the number of open Opportunities and the number of won Opportunities related to each Account. Lightning App Builder is not a place where the app builder can build these new rollups. Lightning App Builder is a tool that allows the app builder to customize the layout and components of Lightning pages, such as record pages, home pages, or app pages. It cannot create new fields or relationships on objects. Lightning Object Creator is not a place where the app builder can build these new rollups. Lightning Object Creator is a tool that allows the app builder to create custom objects from spreadsheet data by uploading a file and mapping columns to fields. It cannot create roll-up summary fields or relationships on existing objects. Opportunity object is not a place where the app builder can build these new rollups. The Opportunity object is the child object in the relationship with the Account object, and roll-up summary fields can only be created on the parent object."
  },
  {
    question: "Universal Containers has a custom picklist called Support Level on the Account object. They would like to show the real-time value of Support Level on all case records. How should an app builder implement this requirement?",
    options: [
      { letter: 'A', text: 'Create a formula field on the Case object using the TEXT function.' },
      { letter: 'B', text: 'Create a formula field on the Account object using the ISPICKVAL function.' },
      { letter: 'C', text: 'Create a Process Builder and use a field update on the Case object.' },
      { letter: 'D', text: 'Create a roll-up summary field using Support Level on the Account object.' }
    ],
    answers: ['A'],
    explanation: "The best way to implement this requirement is to create a formula field on the Case object using the TEXT function. A formula field can display the value of another field from a related object, such as the Account object. The TEXT function can convert a picklist value into text, which can be displayed on the Case record. Creating a formula field on the Account object using the ISPICKVAL function is not a valid solution, as it does not show the value of Support Level on the Case record. The ISPICKVAL function is used to check if a picklist field has a certain value, not to display it. Creating a Process Builder and using a field update on the Case object is not an optimal solution, as it requires more configuration and maintenance than a formula field. A Process Builder may also introduce delays or errors in updating the field value. Creating a roll-up summary field using Support Level on the Account object is not a valid solution, as it does not show the value of Support Level on the Case record. A roll-up summary field is used to aggregate numeric values from child records, not to display picklist values."
  },
  {
    question: "Cloud Kicks (CK) wants to quickly insert a list of over 60,000 net new Accounts. The template based on CK's data model was used to populate the list. Which tool should be used?",
    options: [
      { letter: 'A', text: 'Data Loader' },
      { letter: 'B', text: 'A Lightning Object Creator' },
      { letter: 'C', text: 'Import Wizard' },
      { letter: 'D', text: 'Schema Builder' }
    ],
    answers: ['A'],
    explanation: "The app builder should use Data Loader to quickly insert a list of over 60,000 net new Accounts. Data Loader is a tool that allows users to insert, update, delete, or export large amounts of data from Salesforce using CSV files or database connections. Data Loader can handle up to 5 million records at a time and supports features such as bulk API, batch operations, mapping files, etc. Data Loader is ideal for loading large data sets into Salesforce quickly and efficiently. Lightning Object Creator is not a valid tool, as it cannot insert data into existing objects. Lightning Object Creator is a tool that allows users to create custom objects from spreadsheet data by uploading a file and mapping columns to fields. It cannot load data into existing objects or handle more than 500 records at a time. Import Wizard is not a valid tool, as it cannot handle more than 50,000 records at a time. Import Wizard is a tool that allows users to insert, update, or delete data from Salesforce using CSV files or Excel files. Import Wizard supports standard objects and some custom objects and provides features such as field mapping, duplicate detection, data validation, etc. Import Wizard is ideal for loading small data sets into Salesforce with more control and accuracy."
  },
  {
    question: "Universal containers wants to ensure that they are accepting clean data from their users and verify that important fields are entered. What should an app builder recommend to meet this requirement?",
    options: [
      { letter: 'A', text: 'Update the important fields to be required on the page layout' },
      { letter: 'B', text: 'Make a formula field to check the format of the important fields' },
      { letter: 'C', text: 'Create a workflow rule to check the fields are formatted correctly' },
      { letter: 'D', text: 'Configure a validation to require a field for a specific record type' }
    ],
    answers: ['D'],
    explanation: "Configuring a validation rule to require a field for a specific record type is the best way to ensure that important fields are entered and formatted correctly. Updating the important fields to be required on the page layout will not prevent users from entering invalid data using other methods, such as data loader or quick actions. Making a formula field to check the format of the important fields will not prevent users from entering invalid data, but only display a message or an indicator. Creating a workflow rule to check the fields are formatted correctly will not prevent users from entering invalid data, but only trigger an action after the data is saved."
  },
  {
    question: "A Cloud Kicks employee submitted an opportunity for approval by their manager. What would happen if the employee attempts to edit the description field after submission?",
    options: [
      { letter: 'A', text: 'User will be presented with a \'Record Lock\' notification.' },
      { letter: 'B', text: 'User will be able to edit the description field only.' },
      { letter: 'C', text: 'User will see the record is now owned by their manager.' },
      { letter: 'D', text: 'User will be able to edit the name, but unable to edit the description.' }
    ],
    answers: ['A'],
    explanation: "If an employee attempts to edit the description field after submitting an opportunity for approval, they will be presented with a 'Record Lock' notification. This means that the record is locked for editing while it is in the approval process and only users with the \"Modify All\" permission or users above them in the role hierarchy can edit it."
  },
  {
    question: "An app builder wants to add the option to 'Send New Email' from Leads, Contacts and Accounts for users on mobile. What is the benefit of using global actions to accomplish this?",
    options: [
      { letter: 'A', text: 'Global actions can be accessed anywhere actions are pages, feed and Chatter groups,' },
      { letter: 'B', text: 'Salesforce Lightning Component Library houses existing global actions prebuild for use.' },
      { letter: 'C', text: 'The global action\'s layout automatically clones the default page layout.' },
      { letter: 'D', text: 'Global actions are record-specific and are available when searching that particular' }
    ],
    answers: ['A'],
    explanation: "Global actions can be accessed anywhere actions are pages, feed and Chatter groups. This is correct because global actions are not tied to a specific object, and they can be added to any page that supports actions, such as record pages, home pages, feed pages, and Chatter groups."
  },
  {
    question: "The app builder at AW Computing has been asked to track the number of times a case has been reopened. Which solution should the app builder utilize to help with this request?",
    options: [
      { letter: 'A', text: 'Scheduled Triggered flow' },
      { letter: 'B', text: 'Screw flow' },
      { letter: 'C', text: 'Process Builder' },
      { letter: 'D', text: 'Apex Trigger' }
    ],
    answers: ['A'],
    explanation: "Reference: Salesforce Help - Scheduled Flows"
  },
  {
    question: "Which two places can an app builder go to see a list of available Custom Lightning components in their org? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Visualforce components in Setup' },
      { letter: 'B', text: 'Lightning component Generator' },
      { letter: 'C', text: 'Lightning App Builder' },
      { letter: 'D', text: 'Lightning components in Setup' }
    ],
    answers: ['C', 'D'],
    explanation: "An app builder can go to two places to see a list of available custom Lightning components in their org: Lightning App Builder: This is a tool that allows an app builder to create and customize Lightning pages using drag-and-drop components. The app builder can see the list of custom Lightning components in the Custom section of the Lightning Components pane1. Lightning Components in Setup: This is a setup menu that allows an app builder to view, create, edit, and delete custom Lightning components in their org. The app builder can see the list of custom Lightning components in the Lightning Components section of the Setup menu2. Option A and B are not places where an app builder can see a list of custom Lightning components."
  },
  {
    question: "Northern Trail Outfitters (NTO) has created the custom objects Trail and Park in Salesforce to track trails and parks respectively. NTO wants to track the total number of trails a park has on the Park record without writing any code. Which two actions should an app builder take to accomplish this requirement?",
    options: [
      { letter: 'A', text: 'Use a roll-up summary field on the Park record to show the total number of Trails.' },
      { letter: 'B', text: 'Use a formula field on the Park record to show the total number of trails.' },
      { letter: 'C', text: 'Use a lookup relationship between the Park and Trail objects.' },
      { letter: 'D', text: 'Use a master-detail relationship between the Park and Trail objects.' }
    ],
    answers: ['A', 'D'],
    explanation: "To count child records (Trails) on a parent record (Park) without code, a Roll-up Summary field is required. However, Roll-up Summary fields only work when a Master-Detail relationship exists. Why A (Roll-up Summary) is correct: Exact Extract: \"A roll-up summary field calculates values from related records, such as those in a related list, on a master record. You can count the number of related records or summarize fields.\". Why D (Master-Detail Relationship) is correct: Exact Extract: \"Roll-up summary fields are available only for master-detail relationships.\". Therefore, the Trail object must be the detail and the Park object the master to enable the roll-up count. Why not B: Formula fields can't count related records. Why not C: Lookup relationships don't support roll-up summaries natively."
  },
  {
    question: "The Director of Customer Service wants to receive a notification when a case stays in the New status for more than four business hours. Which two automation processes should be used to accomplish this?",
    options: [
      { letter: 'A', text: 'Validation Rule' },
      { letter: 'B', text: 'Escalation Rules' },
      { letter: 'C', text: 'Scheduled Apex' },
      { letter: 'D', text: 'Flow Builder' }
    ],
    answers: ['B', 'D'],
    explanation: "The requirement is time-based (Case in New status > 4 business hours) and requires a notification. Escalation Rules can monitor case age and trigger escalation or notifications after a specified period. Flow Builder (Scheduled Path or Scheduled Trigger Flow) can be used to evaluate business hours and send alerts. Why B (Escalation Rules) is correct: Exact Extract: \"Escalation rules automatically escalate cases when they meet certain criteria, such as the age of the case, and can notify users or change ownership.\". Escalation rules are ideal for service teams and time-based escalation scenarios. Why D (Flow Builder) is correct: Exact Extract: \"Use scheduled paths in record-triggered flows to perform actions after a certain amount of time has passed since the record was created or updated.\". A Scheduled Path in a record-triggered flow can evaluate the Case's age in hours and send an email alert if the Status remains \"New.\". Why not A: Validation Rules prevent saving invalid data but cannot evaluate elapsed time. Why not C: Scheduled Apex would work technically but is a code-based solution; declarative automation (Flow or Escalation) is preferred for App Builder certification."
  },
  {
    question: "Universal Containers (UC) has large data volumes and is nearing data storage limits. The planned solution is to archive historical data to reduce data storage in Salesforce; however, UC would still like to use reports, queries, and lookups on the archived information. Which two options could meet this requirement? Choose 2 answers",
    options: [
      { letter: 'A', text: 'Big objects' },
      { letter: 'B', text: 'Custom objects' },
      { letter: 'C', text: 'Related objects' },
      { letter: 'D', text: 'External objects' }
    ],
    answers: ['A', 'D'],
    explanation: "Big objects and external objects can be used to archive historical data and reduce data storage in Salesforce, while still allowing users to access the archived data using reports, queries, and lookups. Big objects store data within Salesforce, while external objects store data outside Salesforce and integrate it with Salesforce using an external data source."
  },
  {
    question: "The VP of Sales at Universal Containers has asked the app builder to let sales reps create opportunity records directly from the account, with a number of fields pre-populated. Which feature should the app builder use to allow users to create the opportunity?",
    options: [
      { letter: 'A', text: 'A quick action' },
      { letter: 'B', text: 'A default action' },
      { letter: 'C', text: 'A custom button' },
      { letter: 'D', text: 'A custom link' }
    ],
    answers: ['A'],
    explanation: "The feature that the app builder should use to allow users to create the opportunity is a quick action. A quick action is a type of custom button or link that can create or update records, log calls, send emails, or launch flows from a record page or a global menu. The app builder can create a quick action on the account object that creates an opportunity record with prepopulated fields. Option B is incorrect because a default action is not a valid term, but rather a standard action that appears on every record page by default, such as Edit or Delete. Option C is incorrect because a custom button is not suitable for this requirement, as custom buttons can only display a URL or execute JavaScript when clicked. Option D is incorrect because a custom link is not suitable for this requirement, as custom links can only display a URL or execute JavaScript when clicked."
  },
  {
    question: "When a deal is closed- won, it has to be approved by the owner's manager prior to being added to the leaderboard for a quarterly sales competition. An opportunity is won on the last day of the quarter and the manager is on vacation. What is recommended to ensure all of the appropriate deals are reviewed and the leaderboard is up to date?",
    options: [
      { letter: 'A', text: 'Forward the approval request to the manager\'s assistant.' },
      { letter: 'B', text: 'Set up a delegated approver for the manager' },
      { letter: 'C', text: 'Have the manager log on and reassign the approval request' },
      { letter: 'D', text: 'Use Process Builder to assign a delegated approver.' }
    ],
    answers: ['B'],
    explanation: "Set up a delegated approver for the manager is the recommended solution to ensure all of the appropriate deals are reviewed and the leaderboard is up to date. According to the Salesforce documentation, \"A delegated approver can approve records that are submitted for approval by users below them in the role hierarchy.\". Forwarding the approval request to the manager's assistant, having the manager log on and reassign the approval request, and using Process Builder to assign a delegated approver are not valid or feasible options."
  }
];

export default questionsAppBuilder
