export interface Society {
    Id: string;
    Name: string;
    Accent: string;
    ShortDescription: string;
    Description: string;
    Tags: string[];
    CoverImageLocation: string;
    ProfilePictureLocation: string;
    SocialPosts: Post[];
    Events: SocietyEvent[];
}

export interface Post {
    Id: string;
    PostedDate: Date;
    Title : string;
    Content: string;
}

export interface SocietyEvent {
    Id: string;
    CreatedEvent: Date;
    EventStart: Date;
    EventEnd: Date;
    Title: string;
    Description: string;
    Location: string;
}

export interface User {
    Username: string,
    Password: string,
    FirstName: string,
    LastName: string,
    MyEvents: string[],
    FollowedSocieties: string[]
}

export class DemoConfig {
    public static signedIn : boolean = false;
    public static loggedInUser : User;


    /**
     * A demo selection of users
     */
    private Users: User[] = [
        {
            Username: "username",
            Password: "password",
            FirstName: "Dwight",
            LastName: "Schrute",
            MyEvents: ["lets-build-213421"],
            FollowedSocieties: ["hull-cs-s"]
        }
    ];

    public AddEventToProfile(eventId : string){
        DemoConfig.loggedInUser.MyEvents.push(eventId);
    }

    public SignInCheck(username, password){
        console.log(this.Users);
        DemoConfig.loggedInUser = this.Users.find(x => x.Username == username && x.Password == password);
        DemoConfig.signedIn = DemoConfig.loggedInUser != undefined;
        return DemoConfig.signedIn;
    }

    public FollowSociety(societyId){
        DemoConfig.loggedInUser.FollowedSocieties.push(societyId);
    }


    /**
     * A demo selection of Societies
     */
    private society: Society[] = [
        {
            Id: "hull-cs-s",
            Name: "Hull University Computer Science",
            Accent: "#2ED164",
            ShortDescription: "Providing engaging and academically supporting activities for CS Students.",
            Description: "We're the new official student-run Computer Science Society at Hull, set up with the aim of: Providing engaging and academically supporting activities and events for students with an interest in ComputingThis basically means our role is to make life outside of the course as fun and interesting as possible, organising both social and technical events for you. ",
            Tags: [ "All", "Academic"],
            CoverImageLocation: "https://hullcss.org/images/index-images/allgroup.jpg",
            ProfilePictureLocation: "https://pbs.twimg.com/profile_images/1070255569318174720/QSZ6zaug_400x400.jpg",
            SocialPosts: [
                {
                    Id: "ahbdjhasbd",
                    PostedDate: new Date("2020-03-20"),
                    Title : "Come for Drinks!",
                    Content: "Come down to Sanc on Thursday at 8PM for some drinks (optional) and a chance to meet up with fellow Computer Scientists and have a great time!"
                }
            ],
            Events: [
                {
                    Id: "lets-build-213421",
                    CreatedEvent: new Date("2019-01-16"),
                    EventStart: new Date("2020-03-28"),
                    EventEnd: new Date("2020-03-29"),
                    Title: "Let's Build Hackathon!",
                    Description: "Join us for a 24 Hour Event to build anything you want, blah, blah.",
                    Location: "RBB-24"
                }
            ]
        },
        {
            Id: "football-crazy",
            Name: "Football Men",
            Accent: "#EAB543",
            ShortDescription: "Welcome to Hull University Football Club! We have 6 teams, training sessions 3 days a week and matches on Wednesdays.",
            Description: "HUFC has 4 teams playing in the BUCS leagues against other Universities, and 2 teams playing in the intramural leagues. After matches on Wednesdays, we have a social with the entire club in the evening. With a qualified FA coach, Joe Tomlinson, working throughout the whole squad, this year promises to be an exciting one for HUFC.",
            Tags: [ "All", "Sports", "Football" ],
            CoverImageLocation: "https://02e6d880a8524b0195bf-45609866d547c221393ce7d101b8a66a.ssl.cf3.rackcdn.com/mens-football-profile.jpg",
            ProfilePictureLocation: "https://pbs.twimg.com/profile_images/1228646223856488448/1LH8DjdW_400x400.jpg",
            SocialPosts: [
                {
                    Id: "ahbdjhagfdgdfgdfsbd",
                    PostedDate: new Date("2020-03-20"),
                    Title: "HUFC",
                    Content: "HUFC has 4 teams playing in the BUCS leagues against other Universities, and 2 teams playing in the intramural leagues. After matches on Wednesdays, we have a social with the entire club in the evening. With a qualified FA coach, Joe Tomlinson, working throughout the whole squad, this year promises to be an exciting one for HUFC."
                }
            ],
            Events: [
                {
                    Id: "footbal-34234",
                    CreatedEvent: new Date("2019-01-16"),
                    EventStart: new Date("2020-05-28"),
                    EventEnd: new Date("2020-06-29"),
                    Title: "Football Social Event",
                    Description: "Come join us for a crazy evening.",
                    Location: "Sanc"
                }
            ]
        },
        {
            Id: "arch",
            Name: "Archery",
            Accent: "#18283e",
            ShortDescription: "Welcome to Hull University Archery Club!",
            Description: "Hull University Archery Club brings the ancient art of shooting the bow into the hands of Hull University students in an accessible and affordable manner. All skill levels are welcome to the club, beginner equipment and professional training is supplied to all members, we also have trainers and equipment available for disabled archers so everyone can get involved.",
            Tags: [ "All", "Sports", "Archery" ],
            CoverImageLocation: "https://www.borderlandsoutdoor.com/wp-content/uploads/2018/04/Archery-1.jpg",
            ProfilePictureLocation: "https://c074cc828eac9d94993b-30a8f8e53f85cb62a6e3a36fb538d69a.ssl.cf3.rackcdn.com/ac_thumb_2_1a66eb.jpg",
            SocialPosts: [
                {
                    Id: "bcvcb",
                    PostedDate: new Date("2020-03-20"),
                    Title: "We've got new equipment!",
                    Content: "We've got great news, we have funding for more equipment. Make sure you come down to our next practice event so you can try the new toys!"
                }
            ],
            Events: [
                {
                    Id: "arch-34234",
                    CreatedEvent: new Date("2019-01-15"),
                    EventStart: new Date("2020-05-12"),
                    EventEnd: new Date("2020-06-13"),
                    Title: "Archery",
                    Description: "Practice",
                    Location: "Sanc"
                }
            ]
        },
        {
            Id: "basketball-ladies",
            Name: "Basketball Ladies",
            Accent: "#c9754a",
            ShortDescription: "Hull University Women’s Basketball has become one of the most impressive clubs present at the AU today.",
            Description: "We have an incredibly vibrant and varied social calendar. We have socials every Wednesday night at the on-campus nightclub Asylum. We also host joint socials with Men's Basketball and other AU clubs. We have movie nights, team meals and we also go on tour during the Easter holidays for a few amazing days of sun, sea and sport!",
            Tags: [ "All", "Sports", "Basketball" ],
            CoverImageLocation: "https://eyofbaku2019.com/images/sport%20pages/basketball.jpg",
            ProfilePictureLocation: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/220px-Basketball.png",
            SocialPosts: [
            ],
            Events: [
            ]
        },
        {
            Id: "basketball-men",
            Name: "Basketball Men",
            Accent: "#c9754a",
            ShortDescription: "We're an open and friendly sports group.",
            Description: "Hull University Men's Basketball is a club that welcomes players of all abilities. Even if you just have an interest in the sport and would like to come along to meet some great people you are more than welcome to join us for our socials!",
            Tags: [ "All", "Sports", "Basketball" ],
            CoverImageLocation: "https://c074cc828eac9d94993b-30a8f8e53f85cb62a6e3a36fb538d69a.ssl.cf3.rackcdn.com/ac_thumb_6_c6b6ec.jpeg",
            ProfilePictureLocation: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/220px-Basketball.png",
            SocialPosts: [
            ],
            Events: [
            ]
        }
    ];

    /**
     * GetAllSocieties */
    public GetAllSocieties() : Society[] {
        return this.society;
    }

    /**
     * GetSocietyById
     */
    public GetSocietyById(id : string) {
        return this.society.find(x => x.Id == id);
    }

    public GetSocietyTags() : Array<string> {
        let tags : string[] = [];

        // Go through each society
        this.society.forEach(s => {
            // Then go through each tag of that society
            s.Tags.forEach(t => {
                if (tags.indexOf(t) == -1){
                    tags.push(t);
                }
            });
        });

        console.log(tags);

        return tags;
    }

}
