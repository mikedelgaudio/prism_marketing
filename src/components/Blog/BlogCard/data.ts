export interface BlogPost {
  date: Date;
  title: string;
  imgUrl?: string;
  imgAlt?: string;
  membersInAttendance: string;
  topicsOfDiscussion: string[];
}

export const blogs: BlogPost[] = [
  {
    date: new Date("02/09/2023"),
    title: "Advisor Team Meeting",
    membersInAttendance:
      "Advisor, All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Check in with advisor",
      "Review website progress",
      "Discuss progress of testing",
      "Discuss report and presentation content and structure",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("02/02/2023"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Review printed cube",
      "Review website progress",
      "Review electronics setup",
      "Solder electronic components",
      "Discuss Beta prototype revisions",
      "Devise testing plan",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("01/26/2023"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Review progress to date",
      "Lay out plan for next couple weeks",
      "Assign duties for alpha prototype and testing",
      "Review website progress",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("12/06/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Web interface brainstorming",
      "Discuss report content and progress thus far",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("12/01/2022"),
    title: "Advisor Team Meeting",
    membersInAttendance:
      "Advisor, All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Review of Phase 3 feedback",
      "Discussion of hold on part delivery and domain purchase",
      "Discuss and review progress in developing website interface",
      "Discussing PROOF Lab submission of 3D components",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("11/10/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Review of presentation before submission",
      "Practice run of presentation",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("11/03/2022"),
    title: "Advisor Team Meeting",
    membersInAttendance:
      "Advisor, All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Progress since last check in",
      "Discussed most important feedback to be addressed from Phase 1 Presentation/Report",
      "Discussed presentation method",
      "Presented areas of technical analysis for approval/feedback",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("11/02/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Review of status of website for upcoming due date",
      "Presented Finite Element Analysis and results",
      "Assigned technical analysis sections for Phase 2 Presentation",
      "Discussed plan for meeting with advisor following day",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("10/20/2022"),
    title: "Advisor Team Meeting",
    membersInAttendance:
      "Advisor, All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Reviewed current state and plan for upcoming deliverables for meeting with advisor following day",
      "Presented website, rendering/concepts, discussed purchasing of domain",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("10/19/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Created presentation on current state and plan for upcoming deliverables for meeting with advisor following day",
      "Assigned responsibilities for upcoming deliverables",
      "Presented current state of website",
    ],
  },
  {
    date: new Date("10/06/2022"),
    title: "Advisor Team Meeting",
    membersInAttendance:
      "Advisor, All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Completed, Reviewed, and Rehearsed Phase 1 Presentation",
    ],
  },
  {
    date: new Date("10/03/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: ["Completed Phase 1 Report and Reviewed Content"],
    imgUrl:
      "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("09/21/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Agreed upon following major design elements such as:\n3D-Printed Body with 5 sides. Last side will be slide/screw fit to allow inside access\nSides will be color-coded as well as numbered (Ensures accessibility for color-blindness)\nAccelerometer on the inside will capture/post the data\nBasic website design agreed upon (Screenshot of concept included at end of report)",
      "Shared work done since last meeting (Technical aspect ideas, website design concepts, physical design concepts, report work done individually)",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("09/12/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Main Features, Rough Project Scope",
      "Brainstorming mechanical construction (3D Printing, Purchased Components)",
      "Brainstorming technical construction (On-Board Chip, Data Connection, Bluetooth, Raspberry Pi Server)",
      "Discussion of Phase 1 Progress Report Requirements",
      "Review of website concepts (Very rough)",
      "Set expectations for everyone to create sketches and generate ideas for features/construction",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("09/08/2022"),
    title: "Initial Meeting with Advisor",
    membersInAttendance:
      "Advisor, All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Introductions",
      "Project Overview",
      "Establishment of Communication Method (Slack Channel Created)",
      "Review of Deliverables (Phase 1 Report/Presentation & Progress Report)",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    imgAlt: "Banner",
  },
];
