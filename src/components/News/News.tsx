import React, {useEffect, useState} from 'react';
import s from './News.module.scss'
import PartNews from "./PartNews/PartNews";


export const News = () => {

    const news: NewsType[] = [
        {
            title: "Season 6 of Rick and Morty returns in November",
            photo: "https://cdn.shazoo.ru/c1200x525/653890_sfQMi9H_s6e4.jpg",
            text: "Adult Swim has released a teaser trailer for the remaining episodes of the sixth season of Rick and Morty.",
            author: "www.shazoo.ru",
        },
        {
            title: "Pickles and intergalactic cocktails in the Rick and Morty cookbook",
            photo: "https://cdn.shazoo.ru/c1200x525/640228_rgc5gIP_rickandmorty2.jpg",
            text: "AdultSwim decided to go beyond cartoons, comics, action figures and other merchandise and announced the release of a Rick and Morty cookbook.",
            author: "www.shazoo.ru",
        },
        {
            title: "Russian artist showed how \"Rick and Morty\" from Soviet animators could look like",
            photo: "https://cdn.shazoo.ru/c1200x525/640221_W3ow4Aq_rickandmorty.jpg",
            text: "Russian artist Prokky, working for Soyuzmultfilm, showed how the animated series \"Rick and Morty\" could look like",
            author: "www.shazoo.ru",
        },
        {
            title: "Rick Becomes Kratos in New God of War Ragnarok Ad",
            photo: "https://cdn.shazoo.ru/c1200x525/639995_5M6ObYH_morty-gow.jpg",
            text: "Adult Swim has published a funny advertisement for God of War Ragnarok with Rick and Morty from the animated show of the same name. The characters, as usual, went on a new adventure - to the nine worlds.",
            author: "www.shazoo.ru",
        },
        {
            title: "New seasons of Rick and Morty will be released every year",
            photo: "https://cdn.shazoo.ru/c1200x525/639529_myXVxug_shayfiazoo-title.jpg",
            text: "Rick and Morty producer Scott Marder recently gave a new interview. In it, he said that from now on, new seasons of the series will be released every year.",
            author: "www.shazoo.ru",
        },
        {
            title: "High on Life shooter from Rick and Morty co-creator will be supported with updates and additions",
            photo: "https://cdn.shazoo.ru/c1200x525/638612_H07RBh4_high-on-life.jpg",
            text: "The executive producer of High on Life shooter Squanch Games at gamescom 2022 shed light on plans for post-release support.",
            author: "www.shazoo.ru",
        },
        {
            title: "Rick and Morty is getting an anime series",
            photo: "https://cdn.shazoo.ru/c1200x525/615666_DTCs9oc_1920x1080.jpg",
            text: "Adult Swim has ordered an entire season of the anime adaptation of Rick and Morty called Rick and Morty: The Anime. The anime will have ten episodes directed by Takashi Sano (Tower of God).",
            author: "www.shazoo.ru",
        },
        {
            title: "Crazy and Ridiculous – Rick and Morty Skins Appeared in Rainbow Six Siege",
            photo: "https://cdn.shazoo.ru/c1200x525/604795_BXQWQ6n_morty.jpg",
            text: "Ubisoft has decided to compete with Activision in the competition for the strangest and most ridiculous collaboration. Now Rick and Morty for Rainbow Six Siege has been added to Call of Duty's Attack on Titan.",
            author: "www.shazoo.ru",
        },
        {
            title: "A collection of plasticine short films based on \"Rick and Morty\" has been released",
            photo: "https://cdn.shazoo.ru/c1200x525/568019_qO7ogK4P4O_455.jpg",
            text: "Adult Swim has released a complete collection of Rick and Morty shorts titled Non-Canonical Adventures. All cutscenes are made of plasticine by animator Lee Hardcastle and refer to a whole list of cult films.",
            author: "www.shazoo.ru",
        },
        {
            title: "Back to the Future's Christopher Lloyd plays Rick in new 'Rick and Morty' teaser",
            photo: "https://cdn.shazoo.ru/c1200x525/554217_Eaj4UvluBa_skrinshot_03_09_2021_173051.jpg",
            text: "Adult Swim has released a new teaser for Rick and Morty in honor of the upcoming release of the final episode of the fifth season. It showed how the main characters of the series could look like in real life.",
            author: "www.shazoo.ru",
        },
        {
            title: "'Rick and Morty' Producer Doesn't Rule Out Movie",
            photo: "https://cdn.shazoo.ru/c1200x525/532966_sklT4V7eLs_rick_and_morty_s4_box_art_2020_f.jpg",
            text: "Rick and Morty conquered the TV space, after which they wandered into the territory of comics and board games. Looks like it's about time for a feature film.",
            author: "www.shazoo.ru",
        },
        {
            title: "Epic 17-minute Rick and Morty animation in the form of a 90s game with pixel art",
            photo: "https://cdn.shazoo.ru/c1200x525/523870_PKem41Ly5P_rick_and_morty.jpg",
            text: "With the support of Adult Swim, animator Paul Robertson, best known for his 90s-inspired pixel art creations, has created an epic Rick and Morty video.",
            author: "www.shazoo.ru",
        },
        {
            title: "Rick and Morty Anime Short with Samurai and Ninja",
            photo: "https://cdn.shazoo.ru/c1200x525/419611_7vvInnarvZ_cukcucuk.jpg",
            text: "While Rick and Morty fans are waiting for new episodes to air, Adult Swim has released an anime short based on the show. In it, Rick Samurai fights Rickami Ninja.",
            author: "www.shazoo.ru",
        },
        {
            title: "Rick and Morty got into the dimension of chips in a new commercial",
            photo: "https://cdn.shazoo.ru/c1200x525/404927_EEluqSSfqj_1.jpg",
            text: "It is difficult to say how many different dimensions there are in the world of Rick and Morty, but there is definitely a Pringles universe there. Adult Swim announces promotional collaboration with potato chip maker",
            author: "www.shazoo.ru",
        },
        {
            title: "'Rick and Morty' co-creator takes on plasticine animation series",
            photo: "https://cdn.shazoo.ru/c1200x525/399329_eg7qPidA11_maxresdefault.jpg",
            text: "Rick and Morty co-creator Justin Roiland has announced that he has begun work on a new animated series. It's called Gloop World and will be made from plasticine animation. The show was Roiland's dream for seven years.",
            author: "www.shazoo.ru",
        },
        {
            title: "Elon Musk voiced himself in the new episode of \"Rick and Morty\"",
            photo: "https://cdn.shazoo.ru/c1200x525/389343_vSx1v2Hpxk_tusk.jpg",
            text: "The third episode of the fourth season of Rick and Morty includes everything you could ask for: the raids, Mr. Poopybuthole, and even Elon Musk. Seriously, it's really him. Warning, spoilers ahead! In Rick and Morty, the character's name is Elon...",
            author: "www.shazoo.ru",
        },
        {
            title: "Advertisement: Rick and Morty are in Death Stranding",
            photo: "https://cdn.shazoo.ru/c1200x525/383600_iC1WhuT2gQ_1.jpg",
            text: "Adult Swim released a short video in which a portal gun accidentally led Rick and Morty to Death Stranding. The characters wander the wastelands of the United States, discussing the strange ghosts that circle around them, and at the end, Rick...",
            author: "www.shazoo.ru",
        },
    ]

    const [viewNews, setViewNews] = useState<NewsType[]>([])

    const foo = (arr: NewsType[]) => {
        // const sortArr = arr.sort(() => 0.5 - Math.random());
        const newArr: NewsType[] = []
        // for (let i = 0; i < 3; i++) {
        //     newArr.push(sortArr[i])
        // }
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        for (let i = 0; i < 3; i++) {
            newArr.push(arr[i])
        }
        return newArr
    }

    useEffect(() => {
        setViewNews(foo(news))
    }, [])

    return (
        <div className={s.newsContainer}>
            <div className={s.newsBlock}>
                {viewNews.map((n: NewsType, index) => <PartNews key={index} title={n.title} photo={n.photo}
                                                                text={n.text}
                                                                author={n.author}/>)}
            </div>
            <div className={s.newsButtonBlock}>
                <button onClick={() => setViewNews(foo(news))} className={s.newsButton}>get random news</button>
            </div>
        </div>
    );
};


type NewsType = {
    title: string
    photo: string
    text: string
    author: string
}