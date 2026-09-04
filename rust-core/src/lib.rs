use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn run_cmd(input: &str) -> String {
    let clean = input.trim().to_lowercase();

    if clean.starts_with("username ") {
        let new_name = input.trim()[9..].trim();
        if new_name.is_empty() {
            return String::from("HEY, name CANNOT be blank.");
        }
        return format!("__SUCCESS:CHANGED_NAME:{new_name}");
    }

    match clean.as_str() {
        "help" => String::from(
            "NEUTRAL.exe Available Diagnostics:\n\
             about           - what should you call me? where am I from? and stuff.\n\
             currently       - what i'm listening to, working on, and reading right now.\n\
             interests       - the hella storytime + why i <3 logic and hate CSS.\n\
             commissions     - micro-tasks rules, services, and how to buy me food.\n\
             fandoms         - games and shows i've interacted with.\n\
             username <name> - change your local terminal session user identity.\n\
             ver             - output system version specs."
        ),
        "username" => String::from("[Error] Usage format error; enter 'username <new_name>'."),
        "ver" => String::from("NEUTRAL.exe v1.0.0"),
        "about" => String::from(
            "ABOUT ME:\n\
             - nicknames : Nate, Jay, Max, Jayzor, Zy. (do NOT call me 'or whatever' or you're genuinely done for. ^-^)\n\
             - from      : the Philippines!!! 🇵🇭\n\
             - pronouns  : he/him or they/them if you don't know and don't want to assume.\n\
             - MBTI etc. : INTP, 7w6, sp/so | homoflexible, biromantic, lithromantic.\n\
             - identity  : i have a bunch of smaller labels... i collect them like pokemon, haha......\n\
             - character : extremely observant, questioning things i don't understand (like my homework). aalso, i'm a hungry person. buy me FOOD or I will feed you to my dogs and cat. jokes aside!\n\
             - quote 4uu : YOU are a once-in-a-lifetime occurrence in this universe. the world has been around for billions of years, but it has never seen your kind of magic before, and it never will again. therefore, please, DON'T ever hide it! (❁´◡`❁)"
        ),
        "currently" => String::from(
            "CURRENTLY:\n\
             - 🎵 Listening to : Laufey + OMORI (Specifically: 'Promise', 'Tough Luck', 'Duet', 'OMORI + ALTER')\n\
             - 💻 Working on   : jayysonal + more...\n\
             - 🎒 Learning     : Programming, Piano, Violin, Judo, Badminton, Running/Sprinting\n\
             - 📖 Reading      : random conversations + educational books instead of stories!! (reading comprehension either goes to heaven metaphorically or literally.)"
        ),
        "interests" => String::from(
            "PROGRAMMING LORE:\n\
             - the start   : in Grade 5 playing Roblox. genuinely wanted to make a game, used free models from the Toolbox, accidentally put a Roblox virus in. Studio went BOOM, CRASH. had to delete it, found a 'Script', and discovered coding! a year later found Python and C#. screamed because i didn't know what 'static void' meant so I stopped. 2 years later my brain grew 0.001 mm and i finally picked up these dang languages.\n\
             - why i <3 it : cuz you can MAKE A LOT OF THINGS. i love logic and systems!!!! it follows instructions and not mood swings!!!!\n\
             - languages   : Rust > C# > C++ in order. i love that Rust is so strict!!!! it's like I'm being given a harsh lecture by a robot 💝\n\
             - the dislike : HMMMMMMMMMM, CSS. that's all.\n\
             - habit       : i'm just so lazy, so i make variable names as short as possible (like CatFactClient becoming 'cfc')"
        ),
        "commissions" => String::from(
            "⚙ CODE COMMISSIONS: OPEN (Micro-tasks only 0/2):\n\
             I'm an HS student juggling high school and academics, so I'm keeping these SMALL + MANAGEABLE.\n\
             ❌ NO massive projects, full websites, or frameworks I have to learn overnight.\n\
             ⚡ specialties: small scripts, automation, CLI utilities, data logic (realistically 1-3 hours work).\n\
             ▶ [0x01] Rust / C++ / C# — PRIMARY\n\
             ▶ [0x02] TS / JS / Python — SECONDARY\n\
             ▶ [0x03] HTML / CSS — LIMITED (No frontend design offered, still learning CSS!)\n\
             💳 Payment: GCash (PH) | Parent-Managed PayPal | Robux"
        ),
        "fandoms" => String::from(
            "FANDOMS REGISTER:\n\
             - Games:\nUndertale, OMORI, Deltarune, Genshin Impact, Honkai: Star Rail, Tomodachi Life, Little Misfortune, Fran Bow, Terraria, Minecraft, Roblox, Stardew Valley, Among Us.\n\
             - Shows/Movies:\nGravity Falls, One Piece, Alien Stage, Zombie Stage, Squid Game, Stranger Things, Avatar, Wednesday, Demon Slayer, Adventure Time, Steven Universe, Clarence, Gumball, We Bare Bears, Digital Circus, Murder Drones, Bluey."
        ),
        _ => format!("{} does not match any commands; try entering 'help' for details!!..", input)
    }
}