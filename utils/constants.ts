import { Post } from "./type";

const emailRegex:RegExp =/[a-zA-Z0-9]{5,10}@(gmail|yahoo|hotmail|outlook).(com|net|tn)/;
const posts: Post[] = [
  {
      title: "Exploring the Wonders of Nature",
      description: "A journey through the most beautiful natural landscapes in the world.",
      image: "",
      date: new Date("2023-10-01"),
      author: {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          password: "hashedpassword123",
          avatar: ""
      },
      likes: 120,
      dislikes: 5,
      comments: [
          {
              id: 1,
              author: {
                  firstName: "Alice",
                  lastName: "Smith",
                  email: "alice.smith@example.com",
                  password: "hashedpassword456",
                  avatar: ""
              },
              content: "This is breathtaking! Where was this taken?",
              date: new Date("2023-10-02"),
              replies: [
                  {
                      id: 2,
                      author: {
                          firstName: "John",
                          lastName: "Doe",
                          email: "john.doe@example.com",
                          password: "hashedpassword123",
                          avatar: ""
                      },
                      content: "It was taken in the Swiss Alps!",
                      date: new Date("2023-10-02"),
                      replies: [],
                      likes: 10,
                      dislikes: 0
                  }
              ],
              likes: 25,
              dislikes: 1
          }
      ]
  },
  {
      title: "The Future of Artificial Intelligence",
      description: "How AI is transforming industries and what the future holds.",
      image: "",
      date: new Date("2023-09-25"),
      author: {
          firstName: "Emily",
          lastName: "Johnson",
          email: "emily.johnson@example.com",
          password: "hashedpassword789",
          avatar: ""
      },
      likes: 300,
      dislikes: 10,
      comments: [
          {
              id: 3,
              author: {
                  firstName: "Michael",
                  lastName: "Brown",
                  email: "michael.brown@example.com",
                  password: "hashedpassword101",
                  avatar: ""
              },
              content: "AI is definitely the future. Great post!",
              date: new Date("2023-09-26"),
              replies: [],
              likes: 50,
              dislikes: 2
          }
      ]
  },
  {
      title: "Healthy Eating Habits",
      description: "Tips and tricks for maintaining a healthy diet in a busy world.",
      image: "",
      date: new Date("2023-09-20"),
      author: {
          firstName: "Sarah",
          lastName: "Lee",
          email: "sarah.lee@example.com",
          password: "hashedpassword202",
          avatar: ""
      },
      likes: 150,
      dislikes: 3,
      comments: [
          {
              id: 4,
              author: {
                  firstName: "David",
                  lastName: "Wilson",
                  email: "david.wilson@example.com",
                  password: "hashedpassword303",
                  avatar: ""
              },
              content: "This is so helpful! Do you have any meal prep ideas?",
              date: new Date("2023-09-21"),
              replies: [
                  {
                      id: 5,
                      author: {
                          firstName: "Sarah",
                          lastName: "Lee",
                          email: "sarah.lee@example.com",
                          password: "hashedpassword202",
                          avatar: ""
                      },
                      content: "Yes! I'll share some in my next post.",
                      date: new Date("2023-09-21"),
                      replies: [],
                      likes: 15,
                      dislikes: 0
                  }
              ],
              likes: 30,
              dislikes: 1
          }
      ]
  },
  {
      title: "The Art of Photography",
      description: "Mastering the techniques of capturing stunning photographs.",
      image: "",
      date: new Date("2023-09-15"),
      author: {
          firstName: "Chris",
          lastName: "Evans",
          email: "chris.evans@example.com",
          password: "hashedpassword404",
          avatar: ""
      },
      likes: 250,
      dislikes: 8,
      comments: [
          {
              id: 6,
              author: {
                  firstName: "Laura",
                  lastName: "Taylor",
                  email: "laura.taylor@example.com",
                  password: "hashedpassword505",
                  avatar: ""
              },
              content: "What camera do you recommend for beginners?",
              date: new Date("2023-09-16"),
              replies: [
                  {
                      id: 7,
                      author: {
                          firstName: "Chris",
                          lastName: "Evans",
                          email: "chris.evans@example.com",
                          password: "hashedpassword404",
                          avatar: ""
                      },
                      content: "I recommend starting with a Canon EOS Rebel series.",
                      date: new Date("2023-09-16"),
                      replies: [],
                      likes: 20,
                      dislikes: 0
                  }
              ],
              likes: 40,
              dislikes: 2
          }
      ]
  },
  {
      title: "Traveling on a Budget",
      description: "How to explore the world without breaking the bank.",
      image: "",
      date: new Date("2023-09-10"),
      author: {
          firstName: "Emma",
          lastName: "Clark",
          email: "emma.clark@example.com",
          password: "hashedpassword606",
          avatar: ""
      },
      likes: 180,
      dislikes: 6,
      comments: [
          {
              id: 8,
              author: {
                  firstName: "Daniel",
                  lastName: "Harris",
                  email: "daniel.harris@example.com",
                  password: "hashedpassword707",
                  avatar: ""
              },
              content: "Any tips for finding cheap flights?",
              date: new Date("2023-09-11"),
              replies: [
                  {
                      id: 9,
                      author: {
                          firstName: "Emma",
                          lastName: "Clark",
                          email: "emma.clark@example.com",
                          password: "hashedpassword606",
                          avatar: ""
                      },
                      content: "Use flight comparison websites and book in advance!",
                      date: new Date("2023-09-11"),
                      replies: [],
                      likes: 25,
                      dislikes: 1
                  }
              ],
              likes: 35,
              dislikes: 1
          }
      ]
  }
];


export {emailRegex,posts}