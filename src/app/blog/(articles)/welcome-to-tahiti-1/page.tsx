import type { Metadata } from "next";
import Article, {
    ArticleImageModule,
    ArticleTextModule,
} from "@/components/blog/Article";

export const metadata: Metadata = {
    title: "Welcome to Tahiti Roleplay",
    description:
        "Welcome to our first Developer Blog, where we give you a quick rundown of the road so far and what's in store for you this year",
    openGraph: {
        title: "Welcome to Tahiti Roleplay",
        description:
            "Welcome to our first Developer Blog, where we give you a quick rundown of the road so far and what's in store for you this year",
        locale: "en_US",
        type: "article",
        authors: ["Jamie", "Josh", "Linus", "Sebastiaan", "Tim"],
        publishedTime: "2023-12-08T19:00:00.000Z",
    },
};

export default function StaticArticle() {
    return (
        <Article
            date={`8th December 2023`}
            title={`Welcome to Tahiti Roleplay`}
            subtitle={`Welcome to our first Developer Blog, where we give you a quick rundown of the road so far and what's in store for you this year`}
            coverImageUrl="https://media.discordapp.net/attachments/1154743325954408448/1159895613798875218/image.png"
        >
            <ArticleTextModule>
                <p>
                    Step into a world where the wild west meets boundless
                    possibilities – Tahiti Roleplay, your canvas for crafting
                    unforgettable stories. This isn't just a roleplay server;
                    it's a dynamic sandbox designed to immerse you in the rich
                    tapestry of the untamed frontier.
                </p>
                <p>
                    Tahiti Roleplay has been carefully crafted from the ground
                    up to deliver a high quality roleplaying sandbox for you to
                    toy in. In this first developer blog, we'll look into what
                    to expect from our Early Access period starting in Q4 2023.
                </p>
            </ArticleTextModule>
            <ArticleTextModule title={`Your Character`}>
                <p>
                    Creating your character is not a mere selection of features;
                    it's an exploration of identity. From the heritage that
                    shapes your roots to the shoes that hit the dusty trails,
                    Tahiti Roleplay's character creation is a journey into
                    customization. Delve deeper into your persona with a
                    plethora of Traits & Perks, tailoring your skills and
                    defining your character's essence. Fearful of heights or
                    drawn to the allure of the bottle? Choose traits that
                    resonate with your playstyle.
                </p>
                <p>
                    Dive into a reputation system that blurs the line between
                    virtuous and nefarious deeds. Become the respected
                    law-abiding citizen or embrace infamy and fear. Your
                    character's dynamic story starts the moment you step into
                    Tahiti – choose your path, embark on quests, and shape your
                    own narrative. The sky's the limit; who will you become in
                    the vast expanse of the wild west?
                </p>
            </ArticleTextModule>
            <ArticleImageModule
                imageUrl="https://cdn.discordapp.com/attachments/634064383835635712/1163151525728747550/SPOILER_image.png"
                description="An in-depth character creator allows you to deeply define your visual and personal appearance on the server."
            />
            <ArticleTextModule title={`Your Mount`}>
                <p>
                    At the heart of your adventure lies your faithful companion
                    – your Mount. Select your first companion from a local
                    Stable during onboarding, and from that moment on, it'll be
                    your loyal sidekick. Your Mount isn't just a means of
                    transportation; it's a companion with its own personality,
                    traits, and persistent stats. Treat it well, and your bond
                    will strengthen, making it an invaluable ally in tight
                    spots.
                </p>
                <p>
                    Choose wisely during onboarding, as your Mount's initial
                    characteristics will influence its behavior in dangerous
                    situations. Whether it's a sturdy War Horse or a nimble
                    companion, your Mount evolves and learns new tricks, making
                    you a better outlaw. The bond between you and your Mount is
                    a crucial element in your journey – keep it clean, well-fed,
                    and at peace, and it'll repay you in times of need.
                </p>
            </ArticleTextModule>
            <ArticleTextModule title={`Your Story`}>
                After you're done creating your character, you're ready to join
                the world of Tahiti Gaming. You'll be tasked to answer a handful
                of questions that directly place you into our world. An
                onboarding experience, designed for you to grab a selection of
                starter gear, give you an introduction to our gameplay mechanics
                and gives you a first glimpse of what's in store with our custom
                Quest Framework.
            </ArticleTextModule>
            <ArticleImageModule
                imageUrl="https://media.discordapp.net/attachments/634064383835635712/1173352427597070416/SPOILER_image.png"
                description="Every Journey starts with an onboarding Quest, that helps you gear up and learn the ropes."
            />
            <ArticleTextModule>
                <p>
                    Our highly advanced Quest Framework was designed to mimic
                    the experience found in the base game. Every quest can have
                    unique objectives that can either run simultaneously or in
                    order, to better guide you through the micro-story every
                    Quest tries to tell. We've designed it to allow us to tweak
                    individually crafted Quests in realtime, or to add new and
                    exciting ones without shipping any new server or client
                    builds.
                </p>
                <p>
                    Objectives can be as simple as guiding you to a place, or as
                    complex as having you face a small army of Bandits located
                    in a tightly secured Fort. We're continuously updating the
                    Quest Framework to introduce new mechanics, objective types
                    and rewards for you to obtain.
                </p>
                <p>
                    You can start Quests by receiving them via mail or parcels,
                    finding them in the world by interacting with NPCs or
                    Objects of Interest, like Bounty Posters. Certain Quests
                    start dynamically depending on your actions when you come
                    along random encounters.
                </p>
                <p>
                    Shortly after our Early Access Launch, we aim to bring
                    scalable multiplayer Quests to the experience via a Feature
                    Update. Rob a Train with your Gang, go on a high risk Bounty
                    Hunter mission with your fellow law-abiding citizens or take
                    part in dynamic Quests that automatically populate in the
                    world, like hunting one of the elusive or dangerous
                    Legendary Animals.
                    <br />
                    Dynamic Sessions enable all of you to get rewards by simply
                    joining up with an already started multiplayer Quest, no one
                    misses out.
                </p>
            </ArticleTextModule>
            <ArticleImageModule
                imageUrl="https://media.discordapp.net/attachments/634064383835635712/1163940623540297908/SPOILER_20231017224329_1.jpg"
                description="Take part in a wide variety of activities, like fishing, coming shortly after Launch in a Feature Update."
            />
            <ArticleTextModule title={`Activities`}>
                <p>
                    Tahiti Roleplay isn't just about quests and outlaws; it's a
                    vibrant world teeming with activities. Engage in a variety
                    of pursuits, from the serenity of fishing to intriguing
                    mini-jobs that add depth to your virtual life. The frontier
                    isn't just a stage for high-stakes drama; it's a playground
                    for relaxation and enjoyment.
                </p>
                <p>
                    We're still early in our quest to fill this world with life,
                    but it's already a remarkable experience for you to toy
                    with. Stay tuned for future blogs outlining all the upcoming
                    features we aim to bring to you in 2024.
                </p>
            </ArticleTextModule>
            <ArticleTextModule title={`From Us, For You`}>
                <p>
                    This experience is carefuly crafted for you, our trusty
                    community that's been there for over a decade now. We went
                    through ups and downs, having very grand, fun and active
                    times in our short-lived partnerships with other gaming
                    communities, like Diverse Gaming (eLg), but also not so
                    grand, rather shallow times with very little activity or
                    content for you to enjoy.
                    <br />
                    We haven't always been very transparent with our various
                    initiatives, like Tahiti V / eG V, but we try to better
                    ourselves with this project and by actively engaging with
                    you on our official Discord Server. We plan to host many Q&A
                    sessions and community events.
                </p>
                <p>
                    Tahiti Roleplay (RedM) is not for us, but for you, the
                    player who's tagged along all this years waiting for our
                    next big thing. We can confidently say, that this is the
                    first step into a next generation of roleplaying at Tahiti
                    Gaming. This server has been designed by us, for you to
                    enjoy. We appreciate you being there and want to actively
                    involve you in the development process.
                </p>
                <p>
                    The future of this server is going to be directly shaped by
                    you, we'll soon start letting you in, experiencing our Early
                    Access Prototype, followed by opening the flood gates in
                    terms of things you want to see us add to the server.
                </p>
            </ArticleTextModule>
            <ArticleTextModule>
                Stay tuned for the excitement that awaits as we approach our
                Early Access Launch in Q1 2024. The wild west beckons, and
                Tahiti Roleplay is your stage. Join us on this thrilling
                adventure where your story unfolds, and the possibilities are as
                limitless as the untamed frontier itself.
            </ArticleTextModule>
            <ArticleTextModule>
                Yours truly,
                <br />
                Jamie, Josh, Linus, Sebastiaan and Tim
            </ArticleTextModule>
        </Article>
    );
}
