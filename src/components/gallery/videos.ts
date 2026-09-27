const video = (file: string) => encodeURI(`/assets/img/gallery/videos/${file}.mp4`);

export const videos = [
  {
    title: "Puzzle Game",
    text: "Students solving puzzles together to sharpen their thinking and teamwork.",
    src: video("Sahyadri_Puzzle Game"),
  },
  {
    title: "Traffic Signal",
    text: "A fun lesson on road safety where children learned how traffic signals work.",
    src: video("Sahyadri_Traffic Signal"),
  },
  {
    title: "Student Activities",
    text: "Highlights of the activities our students enjoyed on 19th August.",
    src: video("SWS_19Aug26_activities"),
  },
];
