// Data.js

const quizData = [
    {   
        header: "The Starting Line",
        image: "media/starting line.jpeg",
        question: "The engines of your race car hum as you sit at the starting line. Around you, the track stretches out with a few different paths, each promising different adventures. The crowd of animal spectators roars in excitement, and you can feel the buzz of anticipation. As the race begins and you see the different tracks ahead, how do you decide which one to take?",
        options: [
            { text: "I take a moment to observe, thinking about the best way forward before I make my move.", type: "Investigative" },
            { text: "I trust my instincts and choose the path that feels right in the moment.", type: "Realistic" },
            { text: "I love the thrill of trying something new, so I pick a path that promises surprises.", type: "Artistic" },
            { text: "I radio my team engineers to get their input on the best path forward.", type: "Social" },
            { text: "I like to take risks and speed ahead, seeing where the road will lead me.", type: "Enterprising" },
            { text: "I play it safe and follow the path that’s most straightforward and clear.", type: "Conventional" }
        ]
    },
    {
        header: "The Pit Stop",
        image: "media/pit stop.jpeg",
        question: "You’re driving hard, and the race is getting intense. The pit stop is coming up, and the crew of animals is ready to assist. You can only ask for one type of help. What do you focus on at the pit stop?",
        options: [
            { text: "I’ll ask about any new tech or strategies I could use to gain an advantage.", type: "Artistic" },
            { text: "I’ll focus on checking everything carefully to make sure my car is in top condition.", type: "Investigative" },
            { text: "I’ll quickly assess the situation and trust my gut on what to fix.", type: "Realistic" },
            { text: "I’ll follow a reliable routine and make sure everything is set up exactly as planned.", type: "Conventional" },
            { text: "I’ll focus on tuning my car for speed to go faster than everyone else.", type: "Enterprising" },
            { text: "I’ll talk to the pit crew and see what they think might be the best move based on the race so far.", type: "Social" }
        ]
    },
    {
        header: "The Obstacles Ahead",
        image: "media/obstacles.jpeg",
        question: "You’re speeding down the track, but there’s a huge obstacle in front of you — a wall of tires blocking part of the path. It’s a tight squeeze, and the race is close. How do you handle this obstacle?",
        options: [
            { text: "I trust my quick instincts and find the best way around it without thinking too much.", type: "Realistic" },
            { text: "I look for a creative way to use the obstacle to my advantage, maybe by jumping over it or using a shortcut.", type: "Artistic" },
            { text: "I slow down, carefully navigating around it to avoid damage.", type: "Investigative" },
            { text: "I radio my team engineers to get their advice on how to tackle the obstacle safely and effectively.", type: "Social" },
            { text: "I stay calm, evaluate the options, and follow the safest path around it.", type: "Conventional" },
            { text: "I take a sharp turn and charge through it, powering through boldly.", type: "Enterprising" }
        ]
    },
    {
        header: "The Shortcut",
        image: "media/shortcut.jpeg",
        question: "There’s a hidden shortcut up ahead, but you’re not sure if it’s worth the risk. It could shave off time, but it’s unknown territory. What’s your instinct?",
        options: [
            { text: "I think about the fun of it and decide based on how exciting it seems.", type: "Artistic" },
            { text: "I quickly decide whether it feels right and trust my gut on it.", type: "Realistic" },
            { text: "I’ll radio my team engineers and ask if they think the shortcut is a good idea.", type: "Social" },
            { text: "I take a moment to analyse it and weigh whether the risk is worth the reward.", type: "Investigative" },
            { text: "I go for it, even if it’s risky — I love gaining an edge.", type: "Enterprising" },
            { text: "I’ll stick to the main track; I prefer to play it safe and steady.", type: "Conventional" }
        ]
    },
    {
        header: "The Finish Line",
        image: "media/finish line.jpeg",
        question: "You’re nearing the finish line and you see the other racers closely ahead. What drives you the most as you close in on the goal?",
        options: [
            { text: "The feeling that I made all the right decisions along the way.", type: "Realistic" },
            { text: "The satisfaction of knowing I’ve done everything carefully and consistently.", type: "Investigative" },
            { text: "The joy of having pushed myself to new limits.", type: "Artistic" },
            { text: "The thrill of sharing the experience with my team and celebrating our hard work together.", type: "Social" },
            { text: "The excitement of crossing the finish line first and claiming victory!", type: "Enterprising" },
            { text: "The sense of accomplishment from following the plan and finishing strong.", type: "Conventional" }
        ]
    },
    {
        header: "The Afterparty",
        image: "media/afterparty.png",
        question: "The race is over, and now it’s time to relax. You join the other racers and enjoy a moment of celebration and reflection. As the festivities begin, what’s your role in the group?",
        options: [
            { text: "I’m enjoying the moment of calm, thinking ahead to ways we can improve for the next race.", type: "Conventional" },
            { text: "I’m the storyteller, sharing exciting moments and recounting the bold moves I made.", type: "Enterprising" },
            { text: "I’m sharing insights on my strategies and how I pushed myself to try new things.", type: "Artistic" },
            { text: "I’m asking others about their experiences, enjoying hearing everyone’s stories and perspectives.", type: "Social" },
            { text: "I’m quietly reflecting, analysing how things went and considering what I could have done differently.", type: "Investigative" },
            { text: "I’m reflecting on how everything fell into place and thinking about the practical steps that led to my success.", type: "Realistic" }
        ]
    }
];
