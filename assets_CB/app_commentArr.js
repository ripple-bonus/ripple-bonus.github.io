let namesArr = ["$dollar-Man", "Donovan", "Henry$Money", "Jake", "Michael", "sanchez@fb", "mike2023", "itzMeJohn", "johnny", "Crypto-King", "@crypto_mania","liliard",        "Pablo-", "ZuckerBank", "Gerald4Gold", "Omar", "Blue Wolf", "jason93@fb", "Vitalik_Mask", "jezzy", "Seth1990", "'Lorenzo'", "CASTRO","alejandro", "LBJ23", "SASZUKE", "sanchez", "Karl03", "Crypto-Mania", "$hibaInu", "Dr.Ether", "Gab Watson", "DodgeMoon", "Prince-El", "elon", "Master-G","Jim", "John33", "Brett Wilson", "Nick&Mike",         "Randy", "Steven Likens", "Marc", "thomas02", "Trex", "Rocky", "Bitget@Max", "Jonathan", "Leon", "mankind@47fb", "Adam", "Jake", "user", "Max", "John", "user4", "David", "Luke", "sunnyDay", "Benjamin", "Michael", "coolUser", "Daniel", "Andrew", "awesomeUser7", "Matthew", "Ryan", "starGazer79", "Nicholas", "Joshua", "codingNinja", "William", "Jason", "musicLover04", "Robert", "Kevin", "techGeek321", "Joseph", "Eric", "gameMaster32", "Samuel", "Jacob", "coffeeAddict", "Christopher", "Alex", "bookworm", "Henry", "Elijah", "hikingEnthusiast", "EtherMan", "Brian", "travelBug789", "Nathan", "Aaron", "photographyLover", "Gabriel", "Matthew", "yogaFanatic", "Anthony", "Daniel", "sunsetChaser", "Thomas", "Joshua", "natureLover", "David", "Noah", "movieBuff45", "Ryan", "Ethan", "gamerGuy", "Isaac", "Jason", "musicJunkie", "Charles", "Blake", "codingWizard", "Jack", "Adam", "bitgetLover5", "Owen", "Lucas", "beachBum789", "Cameron", "Dylan", "dogLover", "Zachary", "Christian", "soccerStar1", "Connor", "Matthew", "fashionista", "Gavin", "Tyler", "foodie", "Jonathan", "Colton", "fitnessGuru99", "Jordan", "David", "artisticSoul", "Daniel", "Christopher", "musicMaker", "James", "Dominic", "techWhiz", "cyberPunk23", "ninjaMaster", "guitarHero", "coffeeLover", "webDevWizard", "codeBreaker", "sneakyHacker", "rockstarGamer", "pixelArtist", "mountainExplorer", "adrenalineJunkie", "streetRacer", "coffeeAddict", "cryptoEnthusiast", "gymRat", "photoFanatic", "speedDemon", "musicMaestro", "wanderlust48", "movieBuff32", "codingGenius", "bookWorm", "ironManFan", "coffeeGeek", "naturePhotographer", "skaterDude", "gamingPro24", "TechNerd", "musicLover007", "filmCritic", "codeNinja", "coffeeWizard", "sushiLover", "gamingAddict", "webDesignGuru", "yogaEnthusiast", "pixelArtWizard", "fitnessFreak", "adventureSeeker", "codeMaster", "BinanceCEO", "crypto-AI", "crypto.com", 
"guitarGuru", "coffeeConnoisseur", "photographyPro", "wanderer", "movieGeek", "codingWhiz", "Extraordinaire", "LunaClassic", "Bobby William", "vince", "Alvin Del Rio", "Karl Green", "Bullish Man", "edward", "MVP", "golden fire", "Ca$h-out", "Jack$on", "steven", "leon", "john44", "derrick", "Chriz", "Anthony", "samuel", "ItsMe", "who am I?", "boy2023", "jz", "Mayor", "joshua40", "$GoldFather","hhh", "DJ", 
"brown", "EZrap", "BitGold", "Peter", "aaron", "Jeremy32", "brand G", "LowKey", "luckyGuy", "Mr. Watson", "mr.nobody", "the hitman", "BitriseMan", "the great one", "dragonBrise", "btcGod", "2theMoonGuy", "Green", "Malic", "Ben", "Wager", "Pablo70", "RockMan", "TGT", "xrp-Guy", "Mason", "Henry", "lucky me",
"AntMan", "Money3Maker", "Mr.Pure100%"];

let imagesArr = [];
async function checkImageExists(imagePath) {
    return new Promise((resolve) => {
      let img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imagePath;
    });
  }
  
  (async () => {
    for (let i = 1; i <= 600; i++) {
      let imagePath = `assets_CB/comment_profile/m_images/pic${i}.jpeg`;
      let imageExists = await checkImageExists(imagePath);
      imagesArr.push(imageExists ? imagePath : 'assets_CB/comment_profile/unknown-profile.svg');
    }
  })();

let namesArr2 = ["Mitch-Currency", "$amuel_Jana", "Dana", "Jaq$arah", "Jenny", "Michelle", "sandra", "mich27Luna", "Yassie-ETH", "johanBTC", "amanda", "crypto_queen20","dolla$-Queen",         "Paulina", "akira", "GoldAshley", "Olivia", "Lady Micah", "alice", "Brenda White", "jena¥50Mil", "lanie", "Lala", "CHRISTIE", "ashley","puffKirby", "Jen", "Samantha", "Susan100%", "Crazy-Girl^^", "Cassie", "monica", "Teresa Holmes", "lady_marie", "cryptoGal", "michelle08", "lovelyheart", "princess_anna@gm", "Paula", "helen01", "teresa-loy", "lovely-jess", "heart-evan", "saszha", "alona", "Allona", "Nana", "Hana", "girl90", "6Lady", "Gladyz", "Kyla", "laura_think", "starlightWhisperer", "cupcakeConnoisseur", "beachBabe", "sparkleEnthusiast", "nature'sHarmony", "btc-$gurl", "daisy", "sereneSpirit", "vibrantSoul", "harmonySeeker", "glitterGoddess", "Mary-Ann", "Joy", "Stephanie", "Manilyn", "M.Monroe", "Mrs. Lexton", "Dr. Sophia", "Terra_Luna", "Ferry Jam", "crypto-Cake", "Lexy",
"enchantedDreamer", "VelvetGloves", "SunnySmiles", "crystalClear", "rainbow_Dreamer", "Angel:Wings", "moonbeamGlow", "seashell-collector", "dreamy-eyes", "lollipopPrincess", "radiantBeauty", "Gail_Adventurer", "twinkleToes70", "crazy_gal", "giggles&Glam", "enchantedRealm", "sparklingJewels", "Fairy", "lina_crypto", "dazzlingSmiles", "magicalJourney", "frostedPetals", "shimmeringGoddess", "lunaLovegood", "starlitSkies", "belleOfTheBall", "cherryBlossom", "daydreamBeliever", "Jen83", "radiantSunshine", "glossyLips", "WomanWanderer", "Solana", "charmaigne", "opalGlimmer", "auroraBorealis", "blissfulMelody", "scentedPetals", "cosmicWonders", "dreamweaver85", "rosewaterKisses", "Seeker", "velvetElegance", "fairytaleDreamer", "sparklingSerenity", "buttercreamDelight", "stardustWishes", "goldenGurl", "mysticMoonlight", "whimsicalWonderland", "gardenOfEden", "enchantingEssence", "LadyMam", "blissfulBreeze", "sugarAndSpice77", "kitty-pink", "Sexy_Biatch", "azureTwilight", "urDreamGurl", "mistyMornings77", "lavenderHaze", "enigmaticCharm", "celestialAura", "whisperingWillows", "petalSoft", "delicateLace", "etherealGlow9", "velvetWhispers", "dreamcatcherMuse", "moonliteMagic", "honeydewSmiles", "beautySoul", "heart💕dolla$", "mommy_D", "dreamyDesires", "roseQuartz", "seraphicSerenade", "crystalVisions", "enchantedHarmony", "twilightPrincess", "blossomingBeauty", "mysticalMeadows", "moonshadowKiss", "kiss_me75", "OpalineGlimmer", "sunkissedSerenity", "Melody", "woman-in-red",
 // Additional usernames:
 "Emily", "Olivia92", "Ava17", "Ava", "Sophia86", "Isabella55", "Mia28", "Charlotte51", "Amelia", "Alison Harper74", "Evelyn", "Abigail37", "EmilyRose", "Emma79", "Madison45", "Elizabeth28", "Avery65", "Sofia14", "Ella67", "Scarlett41", "Grace1980", "Chloe72", "Victoria33", "Riley", "Aria92", "Lily39", "Aubrey86", "Zoe", "Penelope60", "Layla47", "Nora13", "Camila81", "Brooklyn36", "Hannah98", "Milan24", "Leah", "ZoeGrace", "Stella", "Lillian91", "Ellie27", "Mila73", "Savannah45", "AveryRose", "Samantha", "Charlie71", "Alexa37", "Eva", "ScarlettRose", "Autumn43", "Hailey79", "Sadie58", "Skylar62", "Bella98", "Lucy85", "Genesis22", "Nevaeh49", "Paisley09", "AriaRose", "Audrey", "Ariana34", "Kennedy67", "Alyssa93", "Claire59", "Peyton225", "HarperRose", "Kylie48", "Maya82", "VictoriaRose", "Julia97", "Katherine43", "Sophie37", "Taylor", "LilyGrace", "Eleanor84", "Eliana31", "Brianna78", "Piper52", "PaisleyRose", "Trinity89", "Faith16", "Willow44", "Elena", "Naomi63", "Melanie92", "Zara29", "Arianna37", "London71", "MadisonRose", "Lydia", "Lyrica", "Adeline59", "Natalie82", "Aubree", "Kaylee79", "Mackenzie36", "Liliana", "Lucia54", "Ayla43", "Natalia86", "Arie91", "Finley57", "Everly69", "Adalyn38", "Eloise72", "Sage48", "Josephine", "Noelle61", "Delilah", "Gracie79", "Luna33", "Emery65", "Emilia93", "Maddison55", "EvaRose", "Leilani71", "Arielle42", "Lola", "Georgia74", "Valentina57", "Isla36", "Rachelle", "WillowGrace", "Daniela", "Emerson89", "Lia16", "Generose", "Sophia Williams", "Olivia Johnson", "Emma Smith", "Ava Brown", "Isabella Davis", "Mia Miller", "Charlotte Wilson", "Amelia Anderson", "Harper Taylor", "Evelyn Martinez", "Abigail Anderson", "Emily Rose", "Madison Clark", "Elizabeth Thompson", "Avery Moore", "Sofia Jackson", "Ella Thomas", "Lenny", "Scarlett Rodriguez", "Grace Hill", "Chloe Moore", "Victoria Lewis", "Riley Green", "Aria Carter", "Lily Reed", "Aubrey Phillips", "Zoe Walker", "Penelope Collins", 
 "Layla Morgan", "Nora Rivera", "Camila Mitchell", "Brooklyn Turner", "Hannah Brooks", "Milan Bennett", "Leah Ward", "Zoe Grace", "Stella Turner", "Lillian Hayes", "ripple girl", "barbie-xrp",
 "Ellie Simmons", "Mila Ramirez", "Savannah Barnes", "Avery Rose", "Samantha Cole"
];

let imagesArr2 = [];
async function checkImageExists(imagePath) {
    return new Promise((resolve) => {
      let img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imagePath;
    });
  }
  
  (async () => {
    for (let i = 1; i <= 600; i++) {
      let imagePath = `assets_CB/comment_profile/f_images/wom${i}.jpeg`;
      let imageExists = await checkImageExists(imagePath);
      imagesArr2.push(imageExists ? imagePath : 'assets_CB/comment_profile/unknown-profile.svg');
    }
  })();


//Use the Array.fill() method to populate the array with the "tnx! & other" value:
const chatArr = new Array(10).fill("tnx!");
chatArr.push(...new Array(5).fill("awesome!"));
chatArr.push(...new Array(12).fill("tnx"));
chatArr.push(...new Array(6).fill("thanks!"));
chatArr.push(...new Array(6).fill("thanks"));
chatArr.push(...new Array(5).fill("Tnx"));
chatArr.push(...new Array(6).fill("thank you!"));
chatArr.push(...new Array(5).fill("to the moon!!!🚀🌒"));
chatArr.push(...new Array(5).fill("XRP to the moon!!!🚀🚀🚀"));
chatArr.push(...new Array(10).fill("how?"));
chatArr.push(...new Array(5).fill("you can only participate once!!"));
chatArr.push("Never seen anyrhing like that, but lucky it worked! Thanks.", "Got 2,400 XRP THANKS 2 Brad Garlinghouse and GitHub", "NEVER DOUBT VITAL", "HI!", "I GOT FUCKING 3,700 XRP OMG!", "IM IN!!", "this is insane +2600 xrp on my Wallet🙌", "VERY NICE GUYS", "Recieved 4,4020 XRP in my wallet OMG Brad Garlinghouse I LOVE YOU!", "awesome offer can I use it 1 more time? Ishouldve sent more...", "GOT 3,3500 XRP!!👍 Tnx!", "wtf it worked", "May the God be with you.", "I was doubting for a long time if I should send here my 4K XRP, but it actually worked for me so I got 8,200 xrp now thanks to github and ripple", "OH SHIT IT WORKS!!!!!!!", "thanks for 2,005 XRP😋. fine here!", "OH FUCK I GOT THE RETURN ! THANKS", "Gracias papi", "3,206 XRP ripple added on my wallet ^^", "crypto is a bubble...", "3,800 XRP ON MY WALLET! tnx!", "This is going to change my life!", "We love you Brad!! 🤌 Good job!", 
"+2,600 XRP!!🤑", "HERE I AM, GOT 4,500 XRP:) FUCKING INSANE THING!!!!!!", "Brad Garlinghouse WE LOVE YOU!!!", "got 22 bits on my wallet now :)", "You better be fast guys!", "XRP never dissapoints!!", "+1200 XRP Back🚀💰", "I sold all by eth a day ago ;(", "GOTTA BUY ABRAND NEW CHEVY!! 18 thousand bucks", "+7,800 XRP🤩 this is... JUST WOW! doubled the amount of my XRP token, from 3,900 XRP to 7,800 XRP", "from 6,000 xrp to 12,000 xrp, I'm so happy now :)🍻 cheers!", "GENEROUS PRESENT!", "I was lucky to get my $120,000.", "I CANT IMAGINE WHAT WILL HAPPEN WITH THE PRICE", "GOT 4,3200 XRP wooo !", "Hell yeah got my 2.5K doubled! ", "wish i hsd more money to send... +1,000 of xrp now added on my trust wallet", "ONE TIME OPPORTUNITY ", "4,380 XRP🥳","OHHHH COME HERE $$$$$$", "Thank you Brad and GitHub! From me and my son.", "Got 7,800 XRP right now!", "will this pump the token?, anyway thanks again for this opportunity", "This is a golden opportunity to collect XRP before the price goes above 10K dollar. It must be because XRP is the world's 2nd BLOCKCHAIN. Do not be late.", "XRP no doubt this team is doing greatBut when we asked about the questions and things that they have said earlier ,,they blocked me from telegram even from Twitter that's not good behaviour I am not spreading any fud about this Project Alot guys buys this project because of me ,,,,, eth team unblock guys ,,,those who are your holders before the pump", "3,608 XRP added on my wallet :)!!", "it doubled my xrp coin big TNX💰🤩", "CHEEERS!🍻🍻", 
"fantastic! I've got 2,000 xrp after contributing 1,000 xrp 😱", "me got 2,560 XRP after sending 1,280 XRP", "got 2.6K XRP, so happy🥰",
"3,000 XRP IS NOW ON MY WALLET!! THANK YOU!!!", "Surprise! got 2,200 XRP", "this is insane! GOT 1,500 XRP", "Gotcha!, 1,250 $xrp added",
"BIG PUMP IS COMING", "Thank you for everything.","WHAAAAAAT??", "added 3K XRP!!💶", "got 1400 XRP, not too much but thank you!", "tnx Brad Garlinghouse X gitHub", 
"I recieved 1,530 xrp as well. This is a fine investment.", "Brad is new CRYPTOKING!", "THANKS FOR THE NEW CAR", "Awesome Brad!", "9,220 XRP yeah!", "OH YES!", "gotcha!!", "+4,180 XRP, this in unbelievable!", "XRP TO THE MOON🚀🚀🚀", "WOW", "+3,840 XRP!!", "does it doubles the amount you send?", "Ill take mychances", "can I have more?", "I AM HAPPY", "OH YESSS 3,110 XRP", "THANKS!", "plus 2.506 xrp", "HOW IS THIS POSSIBLE?", "Hello everyone!", "WHAT", "BRAD IS THE BEST", "thanks", "How?, anyway my friend got 3,260 XRP right now, I will try it also, thanks!", "XRP tokens in one slot And Wait 2nd slot after 3 hours",
"PEPE The platform also features smart-contract functionality and is similar to the Ethereum Virtual Machine (EVM), giving it additional flexibility and versatility $BTC #btc $ETH", "XRP fudders seem confused of the green wave but they are not. They know XRP is solid. They just are just doing what they're told. There's still time to get on the bandwagon. XRP to the top💯🔥🔥🔥", "Keep choosing you again and again.🥀", "this is insane", "Trump for President", "wazzzup!!", 
"love from India! 🇮🇳", "thanks for this airdrop of XRP🫥", "ETH and XRP is my favorite token 😍, tnx Brad for this giveaway and gitbhub",
"Hello it's me :)", "this is Magic of XRP", "does anyone know how to convert ETH token to XRP?", "Bitcoin soon will go down and XRP will take over as #1", "to all who's asking if you can participate again after you already received your bonus, please don't do it cause you can only participate once", "you can only participate once, it's stated in their rules", "join only once, after receiving your bonus, get the hell out of here, let others will get their bonus too", "hello jz, you can only participate once my friend", "watch the live on facebook about this giveaway", "tnx burterin still watching live", "Hurry up guyz it's almost go to zero left on the pool", "hurry!! I want one more time XD it is possible to participate again?", "HOW?", "link?",

"How much left??????", "it took a couple of minutes but I got $13,000 ", "Really?", "BRAD GARLINGHOUSE IS THE KING!", "SpaceX launch soon?", "+ 20K bucks", "omg this is real!", "+3,300 XRP Token", "I LOVE CRYPTO!!", "THATS GOOD!", "Got some!", "HEYYY", "MY GOD", "2,425 XRP? yeah", "how you doing guys? xD", "WOOOOOOOOW!!", "How can I contact Brad Garlinghouse?", "Unbeliveable charity!", "GOT 5,270 XRP!!!", "Thats greatful!", "Changed my mind on xrp. THANK YOU!", "+5,210 XRP on my wallet now😍", "xrp GOES 1mil$?", "thanks much !!!!", "Iwant to participate again!!!!!!!!", "just recieved 4,190 xrp :))", "Please give me some more!", "Very good.", "I CANT BELIEVE IT", "I actually got 5,640 XRP back what thefuck?", "Tell your friends!", "+ 3,200 XRP ^0^", 'THAT"S BEAUTIFUL!', "GOT $200k OMG", "Too good!", "XRP 4 LIFE", "I will remember this moment forever! Recieved 2,364 XRP","Thank god Im on time", "THIS IS SICK!", "this is magic", "3.288 XRP !!!", "Hi everyone :)", "HYPE!", "I love Ripple honestly🥰!!", "I bless you XRP and SEC 😅!!", "+ 4,400 XRP💰", "thanks for letting me participate!", 'Should"ve deposited more....', "Hello!", "thanks for 2,624 XRP", "just received 4,285.80 XRP🤪 I CANT BELIVE MY EYES!!!!", "Im not gonna work again just trading🥳 :D", "OOOOMMMGG!!!!!!!!!!!!!!!!!", "Glad I figured all out! Now I got some money to invest.", "Thank god.", "LETS GO GUYS", "XRP $10 SOON", "+6,000 XRP", "Chill out", "I got 2,215 ripple wow!, AWESOME!!", "GOOD LUCK EVERYONE! I got my cut already", "SO HAPPY!", "omg recieved 5K XRP backl!!!!!", "recieived some xrp thanks", "Who else if not xrp could help us ", "thanks Ripple!!", "+ 3,416 xrp on my metamask wallet!!!!!", "YEAH BITCH", "Im very thankful", "NEW xrp ATH COMING", "Perfect", "WE LOVE YOU Brad", "HI","I WISH I HAD MORE XRP TO SEND", "+1660 XRP", "Thats for real", "IT IS ACTUAL", "AWESOME!😎", "7.200 XRP, this is fantastic!🤩", "xrp GOES 100k$", "ripple ROCKET", "XRP goes 1$ sooner XD", "XRP 4 LIFE!🤪", "wooo!! let's go XRP!😎", "xrp is the future", "XRP better than BTC", "next bitcoin is XRP :)💶", "ripple better than eth ^0^", "shiba army start burning?", "shiba inu sucks! pepe is the best of the best :))", "convert to XRP!!", "what is top 10 Crypto this year? any idea?", "bull run when?", "elon Whales🐋", "that is insane🤪 let'z get it on!!", "Hi Marie! please marry me :)", "shiba down", 
"2025 BTC halving", "when was the BTC bullish?", "tnx Brad Garlinghouse co-founder of Ripple",
"$ripple the dev team behind xrp has done an excellent work in creating a unique ⚡💪🏻💪🏻💎", "$XRP I am bullish on XRP 💪🏻⚡ HODL 🚀", "ETH 2.0 is the key to success :) believe that!", "that is absolutely insane ^0^", "ありがとうございます😚",
"ETH 2.0 Just hold your bag, we gonna moon together, victory is near", "XRP Hodl your position 🚀🚀🚀", "ETH 2.0 is a win win token", "eth2.0 > BTC😁", "rippleeee!!", "thanks Brad CEO of Ripple", "where is Elon Musk? founder of BTC?",
"the power of XRP🚀", "XRP is people currency", "#XRP to the SUN!!🚀☀️", "Ripple is the to success", "Ripple on firreeEE!!!🔥🔥", "this is surreal, xrp 2 the moon!", "tnx Brad Garlinghouse, ripple CEO", "Ripple Founder Brad Garlinghouse, Thank you for this giveaway 😋",
"this is really amazing, tnx ripple xrp for this airdrop event :) and for GitHub too", "i don't wanna miss this oppurtunity, thanks Brad and GitHub", "love it! thanks github X Ripple", "tnx Brad! feed me more!",
"can I participate again?", "CAN I JOIN ONE MORE TIME? anyway thanks Brad and his team also to github, +2,460 xrp added to my wallet", "can i join again?", "I want more! can I join one more?",
"the best token Ripple ^^ 2.5 added to my wallet woooo!!", "tnx Brad Garlinghouse! can I rejoin?", "x2 xrp added on my wallet 🤩", "it is possible to participate again after I doubled my xrp token? anyway thanks again xrp", "wow! this is gonna be great, tnx XRP", "GitHub is for developers right?", "Well done! great job from ripple and github",
"$XRP X GitHub! Thanks", "GitHub awesome job :) thanks", "make github token too :)", "thanks also for gitHub", "GitHub Awesome Job!", 
"Love GitHub X RIPPLE", "the greatest collab of all time XD!!", "github x ripple ^^ SWEET!!", "is this XRP giveaway?", "Elon is crying now :( Dogecoin will never be the same again!", "SEC will act again 🤪",

"I have a dream, nevermind...", "join us on facebook: ", "​solana is strong and will break all time high. we believe in sol long term", "So who in their right mind would sell their digital assets back into usdollar? not me", "PEPE pumped SO WELL before and still maintaining momentum even as BTC dipped. Great attitude by XRP Main Man Brad Garlinghouse", "with the collaboration of GitHub, this is huge!", "GitHub X Ripple is awesome! nice job Brad Garlinghouse", "SEC will loss soon! Go Ripple!!",

"GitHub is an online software development platform. It's used for storing, tracking, and collaborating on software projects. It makes it easy for developers to share code files and collaborate with fellow developers on open-source projects.",




// "Merry x-mas everyone 🎅🏻", "meri x-mas!! tnx for this giveaway", "tnx brad merry christmas", "tnx Brad Garlinghouse and Merry X-mas 🎄🚀", "thanks for this airdrop and merry xmas to everyone 🙌🎄"


);