import { Exercise } from "@/types";

export const exercises: Exercise[] = [
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/bicep-curls-1655286150.jpg",
        type: "pull",
        name: "Bicep Curl",
        link: "https://www.menshealth.com/uk/how-tos/a748583/dumbbell-bicep-curls/",
        musclesWorked: ["Biceps", "deltoids", "brachialis", "brachioradialis"],
        instructions:
            "Holding a dumbbell in each hand and with your arms hanging by your sides, curl the weights up to shoulder level while contracting your biceps."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/goblet-squat-1594986802.jpg",
        type: "legs",
        name: "Goblet Squat",
        link: "https://www.menshealth.com/uk/fitness/a753505/kettlebell-goblet-squat/",
        musclesWorked: ["Quads", "calves", "glutes", "abs", "arms", "grip strength"],
        instructions:
            "Stand with feet set wider than shoulder-width and hold a dumbbell with both hands in front of your chest. Sit back into a squat, then drive back up and repeat."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/arnold-press-1659362810.jpg",
        type: "push",
        name: "Arnold Press",
        link: "https://www.menshealth.com/uk/how-tos/a735580/arnold-press/",
        musclesWorked: ["Deltoids", "triceps", "traps"],
        instructions:
            "Sit on a bench with dumbbells held in front of you, palms facing your shoulders as though you've just finished a bicep curl. Push the dumbbells up over your head while rotating your arms until your palms face away from you. Straighten your arms, pause, then reverse the movement."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/db-clean-and-jerk-1597914548.jpg",
        type: "pull",
        name: "Dumbbell Clean",
        link: "",
        musclesWorked: ["Glutes", "calves", "quads", "biceps"],
        instructions:
            "Flip your wrists so they face forwards and bring the weights to your shoulders, slightly jumping as you do. Slowly straighten your legs to stand. Then lower the weights down to your thigh before moving into squat position and repeating."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/renegade-row-1590132924.jpg",
        type: "pull",
        name: "Renegade Row",
        link: "https://www.menshealth.com/uk/how-tos/a735469/renegade-row/",
        musclesWorked: ["Traps", "lats", "rhomboids", "delts", "abs", "obliques", "biceps", "triceps", "forearms"],
        instructions:
            "Get into a press-up position with your hands on the handles of two dumbbells. Keeping your core tensed, row the right dumbbell up to your abs then return to the start position. Repeat with the left dumbbell to complete one rep."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/db-farmers-walk-1582015293.jpg",
        type: "pull",
        name: "Farmers' Walk",
        link: "https://www.menshealth.com/uk/how-tos/a735438/dumbbell-farmers-walk/",
        musclesWorked: [
            "Upper back",
            "shoulders",
            "triceps",
            "biceps",
            "forearms",
            "abs",
            "glutes",
            "hamstrings",
            "quads",
            "adductors",
            "abductors",
            "calf muscles"
        ],
        instructions: "Walk forward taking short, quick steps. Go for the given distance, as fast as possible."
    },
    {
        imageSrc: "https://hips.hearstapps.com/menshealth-uk/main/assets/curlszottman.gif",
        type: "pull",
        name: "Zottman Curl",
        link: "https://www.menshealth.com/uk/building-muscle/a62714221/zottman-curl/",
        musclesWorked: ["Biceps", "brachialis", "brachioradialis"],
        instructions:
            "With a pair of dumbbells by your sides and with your palms facing forwards, curl the weights up to your shoulders. Once you reach the top of the movement pause, and then turn your hands so your palms are facing downwards as you slowly return then dumbbells back to the starting position using this overhand grip. When the dumbbells reach your thighs again, turn your hands so your palms are back in the starting position facing forward."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/chest-to-fly-pullover-1552484871.jpg",
        type: "push",
        name: "Flat Dumbbell Fly",
        link: "https://www.menshealth.com/uk/how-tos/a60123614/chest-fly/",
        musclesWorked: ["Delts", "pecs", "rhomboids", "serratus anterior", "rotator cuffs", "biceps"],
        instructions:
            "Lie down on a flat bench holding two dumbbells at your shoulders with your palms facing inwards. Press the dumbbells up until your arms are almost fully extended. This is your starting position. From here, with a slight bend in your arms, arc the weights down to your sides until you feel a stretch across your chest. Squeeze your pecs to return the weights to the start position by reversing the movement."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/bent-over-row-1590133418.jpg",
        type: "pull",
        name: "Bent-Over Row",
        link: "https://www.menshealth.com/uk/building-muscle/a757301/how-to-master-the-bent-over-row/",
        musclesWorked: ["Lats", "shoulders", "forearms", "biceps", "spinal erectors", "hamstrings", "glutes"],
        instructions: "Keep your core tight and your back straight as you row the weights up to your chest. Lower and repeat."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/untitled-design-7-641c66d11cd2e.png",
        type: "push",
        name: "Devil's Press",
        link: "",
        musclesWorked: ["Quads", "glutes", "calves", "core", "chest", "shoulders", "arms"],
        instructions:
            "Holding both dumbbells, drop down into a press-up position and perform a burpee. As you begin to stand back up, use the momentum to swing the weights between your legs, then directly overhead. Lower under control, back to the ground and repeat."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/stiff-leg-deadlift-1611155988.jpg",
        type: "pull",
        name: "Stiff Legged Dumbbell Deadlift",
        link: "https://www.menshealth.com/uk/fitness/a753076/two-arm-dumbbell-stiff-legged-deadlift/",
        musclesWorked: ["Hamstrings", "erectors", "lats", "glutes"],
        instructions:
            "Lower the dumbbells to the top of your feet, as far as you can go by extending through your waist, then slowly return to the starting position."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/tricep-kickback-645cc592506a9.jpg",
        type: "push",
        name: "Dumbbell Kickbacks",
        link: null,
        musclesWorked: ["Triceps"],
        instructions:
            "Hinge at the hips by sending your hips behind your heels with a flat back. Start with your arms bent, bringing the dumbbells next to your thighs so your upper arms are parallel to the floor. Straighten your arms behind you using your forearms. Return slowly to the start position and repeat."
    },
    {
        imageSrc: "https://hips.hearstapps.com/menshealth-uk/main/assets/one-arm-swing.gif?resize=768:*",
        type: "push",
        name: "One Arm Swing",
        link: "https://www.menshealth.com/uk/how-tos/a753056/one-arm-dumbbell-swing/",
        musclesWorked: ["Glutes", "hamstrings", "abs", "quads", "shoulders"],
        instructions:
            "Sink into a squat and swing the dumbbell through your legs before immediately driving yourself forward, bringing the weight up towards your head as you straighten your legs. Repeat this movement, then swap sides."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/db-bench-press-1600785713.jpg?resize=768:*",
        type: "push",
        name: "Dumbell Bench Press",
        link: "https://www.menshealth.com/uk/fitness/a735422/incline-dumbbell-press/",
        musclesWorked: ["Pecs", "shoulders", "triceps", "forearms", "lats", "traps", "rhomboids"],
        instructions:
            "Lie on a flat bench holding two dumbbells over your chest with an overhand grip. Push up until your arms are straight, then lower under control."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/untitled-design-7-1666340775.png?resize=768:*",
        type: "push",
        name: "Dumbell Shoulder Press",
        link: "https://www.menshealth.com/uk/how-tos/a735489/dumbbell-standing-shoulder-press/",
        musclesWorked: ["Delts", "traps", "triceps", "pecs", "core"],
        instructions:
            "Position your feet shoulder-width apart and stand holding two dumbbells at shoulder height with an overhand grip. Press the weights up above your head until your arms are fully extended. Return slowly to the start position."
    },
    {
        imageSrc: "https://hips.hearstapps.com/menshealth-uk/main/assets/hammer-curl.gif?resize=768:*",
        type: "pull",
        name: "Cross Body Hammer Curl",
        link: "https://www.menshealth.com/uk/building-muscle/a30873513/dumbell-hammer-curls/",
        musclesWorked: ["Biceps", "brachialis", "forearms"],
        instructions:
            "One at a time, curl each weight up towards your opposing shoulder. Return under control to the start position and repeat on the other side."
    },
    {
        imageSrc: "https://hips.hearstapps.com/vidthumb/brightcove/57893f5be694aa370d883195/thumb_1468612446.png",
        type: "pull",
        name: "Dumbbell Upright Row",
        link: "https://www.menshealth.com/uk/fitness/a753078/two-arm-dumbbell-upright-row/",
        musclesWorked: ["Delts", "traps", "rhomboids", "biceps"],
        instructions:
            "Hold a dumbbell in one hand in front of your body with an overhand grip. Raise your elbow up and to the side using your shoulder muscles to raise the weight up towards your chin. Lower under control back to the start position."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/step-up-1589968861.jpg",
        type: "legs",
        name: "Step-ups",
        link: null,
        musclesWorked: ["Quads", "hamstrings", "glutes", "core"],
        instructions:
            "Place your right foot onto the elevated platform and push up through your heel to lift yourself up and place your left foot on the platform. Step back down with your left foot, concentrating on flexing your hip and the knee of your right leg. Repeat on the other side."
    },
    {
        imageSrc: "https://hips.hearstapps.com/menshealth-uk/main/thumbs/33059/prone-dumbbell-spider-curl.jpg",
        type: "pull",
        name: "Dumbbell Spider Curl",
        link: "",
        musclesWorked: ["Biceps", "triceps"],
        instructions:
            "Lie on an incline bench and hold a dumbbell in each hand, letting them hang underneath your shoulders. Use your biceps to curl the dumbbells towards your shoulders. Slowly return to starting position and repeat."
    },
    {
        imageSrc: "https://hips.hearstapps.com/menshealth-uk/main/assets/Dumbell-scaption.gif",
        type: "pull",
        name: "Dumbbell Scaption",
        link: "https://www.menshealth.com/uk/fitness/a752913/dumbbell-scaption/",
        musclesWorked: ["Back", "shoulders"],
        instructions:
            "Arc the weights up to your sides keeping your arms straight at all times until you feel a strong stretch across your shoulders. Return slowly to the start position."
    },
    {
        imageSrc: "https://hips.hearstapps.com/menshealth-uk/main/thumbs/33405/bent-arm-dumbbell-pull-over.jpg",
        type: "pull",
        name: "Bent Arm Dumbbell Pull Over",
        link: "https://www.menshealth.com/uk/how-tos/a753405/bent-arm-dumbbell-pull-over/",
        musclesWorked: ["Lats", "shoulders", "triceps", "pecs", "serratus anterior"],
        instructions:
            "Lie down on a flat bench. Hold the dumbbell in both hands above you with slightly bent arms. Keeping your arms bent, arc the weight back behind your head and then slowly return to the start position."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/reverse-lunge-1593615558.jpg",
        type: "legs",
        name: "Reverse Dumbbell Lunge",
        link: "https://www.menshealth.com/uk/fitness/a735439/dumbbell-lunge/",
        musclesWorked: ["Calves", "abs", "lower back"],
        instructions:
            "Stand with dumbbells at your side and palms facing your body. Lunge backwards as far as you can with your right leg, bending your front knee so it almost brushes the floor. Use the heel of your right foot to push your upper body back to the starting position. Repeat with the opposite leg."
    },
    {
        imageSrc:
            "https://hips.hearstapps.com/vidthumb/brightcove/57893eb9e694aa370d882fbd/thumb_1468612283.png?crop=1xw:1xh;center,top&resize=980:*",
        type: "legs",
        name: "Single-Leg Romainian Deadlift",
        link: null,
        musclesWorked: ["Hamstrings", "glutes", "ankles", "core"],
        instructions:
            "Hold two dumbbells in front of your thighs, palm facing inwards. Slowly lift one leg straight behind you, bending the other slightly, and lean forward so that your arms lower the dumbbells towards the floor. Pause, then return to upright position."
    },
    {
        imageSrc: "https://hips.hearstapps.com/menshealth-uk/main/thumbs/33462/single-dumbbell-shoulder-raise-(side-grip).jpg?resize=768:*",
        type: "pull",
        name: "Single Dumbbell Shoulder Raise",
        link: null,
        musclesWorked: ["Delts", "triceps", "traps", "upper chest"],
        instructions:
            "Place one hand on either side of a dumbbell and let it hang between your legs. Lift the dumbbell directly above your head, then lower it back down and repeat."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/calf-raises-1610550932.jpg?resize=768:*",
        type: "legs",
        name: "Dumbbell Calf Raise",
        link: "https://www.menshealth.com/uk/building-muscle/a36045873/calf-raises-workouts/",
        musclesWorked: ["Calves", "grip strength"],
        instructions:
            "Stand upright holding two dumbbells by your sides. Place the balls of your feet on an exercise step or weight plate with your heels touching the floor. With your toes pointing forwards, raise your heels off the floor and contract your calves. Slowly return to the starting position."
    },
    {
        imageSrc:
            "https://hips.hearstapps.com/vidthumb/acf49848-e15e-4b79-8b09-937401dd8a75/thumb_1920x1080_00001_1581622940_22672.jpg?crop=1xw:1xh;center,top&resize=980:*",
        type: "push",
        name: "Hollow Body Skull Crushers",
        link: null,
        musclesWorked: ["Triceps", "core", "abs"],
        instructions:
            "Lie with your back on the ground, legs straight, two dumbbells held directly over your shoulders. Tighten your abs, pressing your lower back into the ground. Raise your legs an inch off the ground. Raise your shoulder blades off the ground. Keeping your arms straight, shift your upper arms back slightly. Bending only at the elbows, lower the weights until they nearly touch your shoulders, keeping the rest of your body tight in the starting position. Press back up, straightening only at the elbows."
    },
    {
        imageSrc:
            "https://hips.hearstapps.com/vidthumb/c7128839-1db1-47ae-ac5b-d83914fcbb8e/thumb_1920x1080_00001_1569335058_33495.jpg?crop=1xw:1xh;center,top&resize=980:*",
        type: "push",
        name: "Rotational Decline Weighted Sit-up",
        link: null,
        musclesWorked: ["Core", "abs"],
        instructions:
            "Start by positioning yourself in the decline bench, gripping a light weight with both hands. Lower your torso down so that its parallel to the ground. Hold the weight straight out from your chest, keeping your arms as straight as possible. Rotate your torso and arms to one side as far as possible, twisting from low in your torso. Pause for 1 or 2 seconds. Rotate back to center while also squeezing your core to perform a sit-up, keeping your arms straight and brining the weight overhead. Repeat on the opposite side."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/dumbbell-thruster-1594907850.jpg?resize=768:*",
        type: "legs",
        name: "Dumbbell Thruster",
        link: null,
        musclesWorked: ["Quads", "glutes", "hamstrings", "shoulders", "arms", "core"],
        instructions:
            "Begin with the dumbbells in the front rack position with the end of the bells resting on your shoulders. Squat down while keeping your chest open until your thighs break parallel. Push through the heels explosively back to standing, let the effort of the squat power the dumbbells into the overhead position. Bring the dumbbells back to your shoulders ready for your next rep."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/db-deadlift-1676549341.jpeg?resize=768:*",
        type: "legs",
        name: "Dumbbell Deadlift",
        link: "https://www.menshealth.com/uk/how-tos/a748582/how-to-deadlift/",
        musclesWorked: ["Quads", "glutes", "hamstrings", "back"],
        instructions:
            "With a pair of dumbbells on the floor, just outside of your feet, hinge down with a flat back and soft knees to grip them. Squeeze your lats and stand upright – picture pushing the ground away with your feet. Take a deep breath and reverse the movement to the ground. Squeeze your empty fist to create tension on the opposite side. Avoid excessive rounding of the lower back throughout."
    },
    {
        imageSrc:
            "https://hips.hearstapps.com/hmg-prod/images/dumbbell-lateral-crawl-2-1638449627.png?crop=1.00xw:0.543xh;0,0.281xh&resize=768:*",
        type: "pull",
        name: "Dumbbell Hang Clean",
        link: null,
        musclesWorked: ["Arms", "back", "glutes", "core"],
        instructions:
            "Stand tall and hold your dumbbells at your side. Hinge at the hips to lower them to your knees. Stand back up with a slight jump, using the momentum to pull the dumbbells on to your shoulders. Stand up straight, then lower under control to your sides and repeat."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/screenshot-2023-12-26-at-13-01-14-658aced64393f.png",
        type: "pull",
        name: "Plank Pass Through",
        link: null,
        musclesWorked: ["Core", "back", "shoulders", "legs", "arms"],
        instructions:
            "Begin in the high plank position with a dumbbell or kettlebell on the outside of your palm. Reach under your torso from the opposite side to the weight. Pull the weight under your body while keeping the hips completely even. Repeat on the other side."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/db-bench-press-1600785713.jpg",
        type: "push",
        name: "Dumbbell Bench Press",
        link: "https://www.menshealth.com/uk/fitness/a735422/incline-dumbbell-press/",
        musclesWorked: ["Pecs", "shoulders", "triceps", "forearms", "lats", "traps", "rhomboids"],
        instructions:
            "Lie on a flat bench holding two dumbbells over your chest with an overhand grip. Push up until your arms are straight, then lower under control."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/untitled-design-7-1666340775.png",
        type: "push",
        name: "Dumbbell Shoulder Press",
        link: "https://www.menshealth.com/uk/how-tos/a735489/dumbbell-standing-shoulder-press/",
        musclesWorked: ["Delts", "traps", "triceps", "pecs", "core"],
        instructions:
            "Position your feet shoulder-width apart and stand holding two dumbbells at shoulder height with an overhand grip. Press the weights up above your head until your arms are fully extended. Return slowly to the start position."
    },
    {
        imageSrc: "https://hips.hearstapps.com/vidthumb/acf49848-e15e-4b79-8b09-937401dd8a75/thumb_1920x1080_00001_1581622940_22672.jpg",
        type: "push",
        link: null,
        name: "Hollow Body Skullcrushers",
        musclesWorked: ["Triceps", "core", "abs"],
        instructions:
            "Lie with your back on the ground, legs straight, two dumbbells held directly over your shoulders. Tighten your abs, pressing your lower back into the ground. Raise your legs an inch off the ground. Raise your shoulder blades off the ground. Keeping your arms straight, shift your upper arms back slightly. Bending only at the elbows, lower the weights until they nearly touch your shoulders, keeping the rest of your body tight in the starting position. Press back up, straightening only at the elbows."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/dumbbell-lateral-crawl-2-1638449627.png",
        type: "pull",
        name: "Bear Pose Pull-through",
        link: null,
        musclesWorked: ["Core", "arms", "shoulders", "quads"],
        instructions:
            "Assume the all fours position, with your hands under your shoulders and knees under your hips, a dumbbell on the outside of one hand. Push the knees an inch off the floor and hold. Reach with the opposite hand to the side of the dumbbell and drag it under your torso. Replace the hand on the floor and repeat with the other hand."
    },
    {
        imageSrc: "https://hips.hearstapps.com/hmg-prod/images/dumbell-snatch-1582219643.jpg",
        type: "pull",
        name: "Dumbbell Snatch",
        link: null,
        musclesWorked: ["Quads", "hamstrings", "glutes", "core", "back", "shoulders"],
        instructions:
            "Begin with your dumbbell on the ground between your legs. Squat down and grab the weight. Drive up through your hips, generating momentum to pull the dumbbell towards the ceiling in one motion, finishing overhead in full lockout. Squat down and return the weight to the start position. Alternate hands each rep."
    }
];
