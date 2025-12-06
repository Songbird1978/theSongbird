import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.artist.create({
        data: {
            name: "Giorgio Li Calzi",
            genres: ["JAZZ", "EXPERIMENTAL", "ELECTRONIC"], // Need Genres. prefix
            description:
                "Giorgio Li Calzi (1965) is a trumpeter, composer and music producer, cultural promoter, performing director. He started overdubbing piano and synthesizer as a child, and in 1990 he began to study and play the trumpet.  In 1990 Giorgio also won the best European composer award at the Competition for Young Jazz Talents (RAI/Ives St. Laurent), in Rome.",
            imageUrl: [
                "https://giorgiolicalzi.com/wp-content/uploads/2018/10/solaris-coazzolo-tremlet.jpg",
                "https://giorgiolicalzi.com/wp-content/uploads/2014/02/li-calzi-chamois-ph-baiano.jpg",
            ], // Arrays need square brackets
            audioUrl: ["/audio/project1.mp3"], // Arrays need square brackets
            links: ["https://giorgiolicalzi.com/"], // Arrays need square brackets
            records: {
                create: [
                    {
                        title: "Organum",
                        description:
                            'Hayley contributed to two tracks from this album,"Exist" and "Eyes Wide Open", which charted in the Italian Jazz Charts to National aclaim in Italy, and recently featured in Art Crimes documentary for Arte/Sky, ',
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165853/Giorgio_Organum_jjzpa5.png",
                        ], // Arrays need square brackets
                        links: [
                            "https://www.fonosintesi.com/disco_licalzi.shtml",
                        ], // Arrays need square brackets
                    },
                    {
                        title: "Art Crimes by Arte/Sky - directed by Stefano Strocchi",
                        description:
                            'A six part thriller documentary. "Eyes Wide Open" by Giorgio Li Calzi and Hayley Alker was featured in the episode about Van Goghs stolen works, and a new piece featuring a poem by Emily Dickinson, "I held a jewel in my fingers", performed with string quartet was featured in the episode about Carvaggio. Later aired on Prime. ',
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764172256/Art-Crimes_hpcu1k.jpg",
                        ], // Arrays need square brackets
                        links: ["https://www.imdb.com/title/tt23558468/"], // Arrays need square brackets
                    },
                ],
            },
        },
    });

    await prisma.artist.create({
        data: {
            name: "Helsinki",
            genres: ["JAZZ", "SOUL", "BLUES"], // Need Genres. prefix
            description:
                "Combining elements of Jazz, Soul and Blues, encased in the experience and wisdom of a group of musicians that have worked together and apart in many forms for the last 40 years. Furious Cool, born out of shared loss and change, are a group striving to write beautiful songs and share the joy of their love for music and live performance. Gary Shaw - guitar, Robin Vick - bass, Cliff Chapman - keys, Bernie Fox - drums & percussion, Hayley Alker - voice",
            imageUrl: ["/images/project1.jpg"], // Arrays need square brackets
            audioUrl: ["/audio/project1.mp3"], // Arrays need square brackets
            links: ["https://soundcloud.com/helsinki"], // Arrays need square brackets
            records: {
                create: [
                    {
                        title: "Helsinki",
                        description:
                            "Self Titled debut album from 2007 was championed by BBC Introducing, and later led to festival shows and live radio appearances",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165860/Helsinki_by_Helsinki_wuzzc5.png",
                        ], // Arrays need square brackets
                        links: [
                            "https://www.bbc.co.uk/hampshire/content/articles/2008/09/16/helsinki_southlive_feature.shtml",
                        ],
                    },
                    {
                        title: "Arrivals & Departures",
                        description: "2nd studio album by Helsinki",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165857/Helsinki_Arrivals_and_Departures_vcjwrk.png",
                        ], // Arrays need square brackets
                        links: ["https://soundcloud.com/helsinki/guilla"],
                    },
                ],
            },
        },
    });

    await prisma.artist.create({
        data: {
            name: "Hippy Equivalent",
            genres: ["EXPERIMENTAL", "CHAOS", "JAZZ", "TRASH"], // Need Genres. prefix
            description:
                "Combining elements of Jazz, Soul and Blues, encased in the experience and wisdom of a group of musicians that have worked together and apart in many forms for the last 40 years. Furious Cool, born out of shared loss and change, are a group striving to write beautiful songs and share the joy of their love for music and live performance. Gary Shaw - guitar, Robin Vick - bass, Cliff Chapman - keys, Bernie Fox - drums & percussion, Hayley Alker - voice",
            imageUrl: ["/images/project1.jpg"], // Arrays need square brackets
            audioUrl: ["/audio/project1.mp3"], // Arrays need square brackets
            links: ["https://github.com/yourusername/project1"], // Arrays need square brackets
            records: {
                create: [
                    {
                        title: "Around the World",
                        description:
                            'Debut track from double EP, "Environment, Circumstance & Volume" due to be released on vinyl & digitally in early 2026. The work of HipEq is focused on promoting awareness of current global issues, using surrealism and humour where possible. Their first show in Nov 25 was supporting The Young Gods on their Appear Disappear Tour.',
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165847/Around_the_World_-_HIPEQ_-_high_quality_facebook_p8bvvq.png",
                        ], // Arrays need square brackets
                        links: [
                            "https://hippyequivalent.bandcamp.com/track/around-the-world",
                        ], // Arrays need square brackets
                    },
                    {
                        title: "Toads",
                        description:
                            'Track from double EP, "Environment, Circumstance & Volume" due to be released on vinyl & digitally in early 2026. The work of HipEq is focused on promoting awareness of current global issues, using surrealism and humour where possible. Their first show in Nov 25 was supporting The Young Gods on their Appear Disappear Tour.',
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165884/Toads_CD_image_xqfx8r.png",
                        ], // Arrays need square brackets
                        links: [
                            "https://hippyequivalent.bandcamp.com/track/toads",
                        ], // Arrays need square brackets
                    },
                ],
            },
        },
    });

    await prisma.artist.create({
        data: {
            name: "CURL",
            genres: ["ELECTRONIC", "ROCK", "NEW WAVE", "ALTERNATIVE"], // Need Genres. prefix
            description:
                "Combining elements of Jazz, Soul and Blues, encased in the experience and wisdom of a group of musicians that have worked together and apart in many forms for the last 40 years. Furious Cool, born out of shared loss and change, are a group striving to write beautiful songs and share the joy of their love for music and live performance. Gary Shaw - guitar, Robin Vick - bass, Cliff Chapman - keys, Bernie Fox - drums & percussion, Hayley Alker - voice",
            imageUrl: ["/images/project1.jpg"], // Arrays need square brackets
            audioUrl: ["/audio/project1.mp3"], // Arrays need square brackets
            links: ["https://github.com/yourusername/project1"], // Arrays need square brackets
            records: {
                create: [
                    {
                        title: "Shapeshifters",
                        description:
                            "CURL formed in 2009 and this is their 3rd studio album recorded in Beausoleil, France with Teo Sarfati",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165844/03._Shapeshifters_dr4vmj.jpg",
                        ], // Arrays need square brackets
                        links: [
                            "https://bethshalomrecords.bandcamp.com/album/shapeshifters?search_item_id%3D4222098944%26search_item_type%3Da%26search_match_part%3D%253F%26search_page_id%3D4875516362%26search_page_no%3D0%26search_rank%3D1=",
                        ], // Arrays need square brackets
                    },
                    {
                        title: "Exit Real Life",
                        description:
                            "CURL formed in 2009 and this is their 2nd studio album",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165836/01._Exit_Real_Life_uwlysh.jpg",
                        ], // Arrays need square brackets
                        links: [
                            "https://d-monic.bandcamp.com/album/exit-real-life?search_item_id%3D529404588%26search_item_type%3Da%26search_match_part%3D%253F%26search_page_id%3D4876524865%26search_page_no%3D0%26search_rank%3D2=",
                        ],
                    },
                    {
                        title: "We are Complex",
                        description:
                            "CURL formed in 2009 and this is their 1st studio album. FrancKA, has created the right alchemy, with the collaboration of Hayley Alker (Helsinki). The trip-hop influences gives way to a powerful and sharp electro-rock.",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165838/01._We_Are_Complex_aik5o7.jpg",
                        ], // Arrays need square brackets
                        links: [
                            "https://d-monic.bandcamp.com/album/we-are-complex",
                        ],
                    },
                    {
                        title: "Okeanos",
                        description:
                            'CURL - original soundtrack for the French Movie, "Les enfants d-Okeanos", directed by Fabrice Begotti',
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165838/01._We_Are_Complex_aik5o7.jpg",
                        ], // Arrays need square brackets
                        links: [
                            "https://curlukfr.bandcamp.com/album/okeanos-original-soundtrack",
                        ],
                    },
                    {
                        title: "Channel Noir",
                        description:
                            "Compliation of Portsmouth Bands to stand against Brexit. Performed a series of concerts as a collective around Hampshire and in France",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165838/01._We_Are_Complex_aik5o7.jpg",
                        ], // Arrays need square brackets
                        links: [
                            "https://curlukfr.bandcamp.com/album/okeanos-original-soundtrack",
                        ],
                    },
                ],
            },
        },
    });

    await prisma.artist.create({
        data: {
            name: "Peach and the New Beats",
            genres: ["JAZZ", "SOUL", "AMBIENT"], // Need Genres. prefix
            description:
                "Peach and the New Beats serve to you 'music to melt your heart.' That, they say, is their goal. The group created their first album of material, 'A curious case of happiness' in 2012. Their original music takes influence from soul, jazz and blues. They released their second EP 'Home Before Midnight', in 2016. They give each well-chosen cover, the 'Peachy' treatment. Influences include Steely Dan, Rickie lee Jones, Steve Gadd, Harriett Wheeler, Neil Larson, John Cleary, Dr John, Joni Mitchell, Talk Talk and many more.",
            imageUrl: ["/images/project1.jpg"], // Arrays need square brackets
            audioUrl: ["/audio/project1.mp3"], // Arrays need square brackets
            links: ["https://github.com/yourusername/project1"], // Arrays need square brackets
            records: {
                create: [
                    {
                        title: "A Curious Case of Happiness",
                        description:
                            "The debut album from Peach and the New Beats, created with love and great vibes. The last song on the record is the first song they wrote together. The majority of the song was improvised and recorded in that moment and we have tried to dedicate the same principle to each of the tracks across the record. Magical moments indeed.",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165864/peach_a_curious_case_of_happiness_hplbyr.jpg",
                        ], // Arrays need square brackets
                        links: [
                            "https://peachandthenewbeats.bandcamp.com/album/a-curious-case-of-happiness",
                        ], // Arrays need square brackets
                    },
                    {
                        title: "Home Before midnight",
                        description:
                            "The follow-up EP from Peach and the New Beats. Magical moments indeed.",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165867/Peach_EP_Home_before_midnight_x4jc1j.png",
                        ], // Arrays need square brackets
                        links: [
                            "https://peachandthenewbeats2.bandcamp.com/album/home-before-midnight",
                        ], // Arrays need square brackets
                    },
                ],
            },
        },
    });

    await prisma.artist.create({
        data: {
            name: "Furious Cool",
            genres: ["JAZZ", "SOUL", "BLUES"], // Need Genres. prefix
            description:
                "Combining elements of Jazz, Soul and Blues, encased in the experience and wisdom of a group of musicians that have worked together and apart in many forms for the last 40 years. Furious Cool, born out of shared loss and change, are a group striving to write beautiful songs and share the joy of their love for music and live performance. Gary Shaw - guitar, Robin Vick - bass, Cliff Chapman - keys, Bernie Fox - drums & percussion, Hayley Alker - voice",
            imageUrl: ["/images/project1.jpg"], // Arrays need square brackets
            audioUrl: ["/audio/project1.mp3"], // Arrays need square brackets
            links: ["https://github.com/yourusername/project1"], // Arrays need square brackets
            records: {
                create: [
                    {
                        title: "Sit Down - Single",
                        description:
                            "Created in 2022, supporting a show at the Groundlings Theatre - uptempo, bossa nova, track about working out problems in a relationship",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165879/Sit_Down_Single_cover_4th_July_22_darker_blue_font_q1ev6n.jpg",
                        ], // Arrays need square brackets
                        links: ["https://www.youtube.com/watch?v=KPqQmKzOBrI"], // Arrays need square brackets
                    },
                ],
            },
        },
    });

    await prisma.artist.create({
        data: {
            name: "Session Vocals",
            genres: [
                "JAZZ",
                "SOUL",
                "BLUES",
                "ALTERNATIVE",
                "INDIE",
                "ROCK",
                "EXPERIMENTAL",
            ], // Need Genres. prefix
            description:
                "Over the years, Hayley has guested on records and has been sampled by various musicians",
            imageUrl: ["/images/project1.jpg"], // Arrays need square brackets
            audioUrl: ["/audio/project1.mp3"], // Arrays need square brackets
            links: ["https://github.com/yourusername/project1"], // Arrays need square brackets
            records: {
                create: [
                    {
                        name: "Steve Lympany", // Missing required field
                        title: "Into the Fire",
                        description:
                            "Steve has played with many bands over the years including, The Mild Mannered Janitors, The Rems, Freestone",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165879/Sit_Down_Single_cover_4th_July_22_darker_blue_font_q1ev6n.jpg",
                        ], // Arrays need square brackets
                        links: ["https://www.youtube.com/watch?v=KPqQmKzOBrI"], // Arrays need square brackets
                    },
                    {
                        name: "Chris Perrin", // Missing required field
                        title: "Magnets",
                        description:
                            "Steve has played with many bands over the years including, The Mild Mannered Janitors, The Rems, Freestone",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165879/Sit_Down_Single_cover_4th_July_22_darker_blue_font_q1ev6n.jpg",
                        ], // Arrays need square brackets
                        links: ["https://www.youtube.com/watch?v=KPqQmKzOBrI"], // Arrays need square brackets
                    },
                    {
                        name: "DSI", // Missing required field
                        title: "Direct Spiritual Intellect",
                        description:
                            "Raheen is from Sierra Leone and this is his first album. Hayley provided backing vocal melodies and arrangement to a few tracks from this album",
                        imageUrl: [
                            "https://res.cloudinary.com/djajtxjpr/image/upload/v1764165879/Sit_Down_Single_cover_4th_July_22_darker_blue_font_q1ev6n.jpg",
                        ], // Arrays need square brackets
                        links: ["https://www.youtube.com/watch?v=KPqQmKzOBrI"], // Arrays need square brackets
                    },
                ],
            },
        },
    });

    await prisma.design.createMany({
        data: [
            {
                title: "Peach and the New Beats",
                techstack: [
                    "Adobe Illustrator",
                    "Adobe Indesign",
                    "Adobe photoshop",
                    "Adobe Fonts",
                ],
                description:
                    "Creation of full colour CD album with 8 page booklet, inlay and on-cd print design for manufacture. Creation of vector images, colour swatches, and templates for manufacture including creation of UPC and ISRC codes. The physical product is sold with a postcard following the theme of the CD. Marketing materials for live work including posters, backdrops, logos, email templates and invoices.",
                imageUrl: [
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764080684/Peach_LP_cover_dz7pj1.jpg",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944170/Screenshot_2025-12-05_at_14.11.21_trwsvs.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944170/Screenshot_2025-12-05_at_14.11.43_wywn80.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944167/Screenshot_2025-12-05_at_14.11.05_uocaku.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944162/Screenshot_2025-12-05_at_14.10.33_iweady.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944161/Screenshot_2025-12-05_at_14.10.13_oztt74.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944161/Screenshot_2025-12-05_at_14.10.13_oztt74.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944159/Screenshot_2025-12-05_at_14.09.57_zjoylt.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944135/CD_Demo_Cover_duo_xuqkhi.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944127/CD_Demo_Cover_band_czjk5v.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764944036/Contact_sheet_nujld9.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764945113/Peach_postcard_ba8ouu.jpg",
                ],
                link: "https://peachandthenewbeats.bandcamp.com/album/a-curious-case-of-happiness",
            },
            {
                title: "Helsinki",
                techstack: [
                    "Adobe Indesign",
                    "Adobe dreamweaver",
                    "artist collaboration",
                ],
                description:
                    "Helsinki is a band created in 2007. Two albums were created. It has a minimalist theme. Simplicity and clean lines was the brief for the first CD. We collaborated with Dean Clarke on the design and Hayley realised the design using Adobe Indesign. The second CD was created in collaboration with James Weaver. The brief was to create an art deco representation of an old Portsmouth cinema from Cosham. The inlays and credits were the inside of the cinema lobby and the fonts used old 1930s style fonts, to continue the art deco theme throughout the product. Hayley drafted the ideas, James Weaver realised designs through collaboration and revision meetings with the band. Hayley realised the final contact sheets before manufacture",
                imageUrl: [
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764086483/Helsinki_Arrivals_and_Departures_fktc3a.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764086483/Helsinki_Arrivals_and_Departures_fktc3a.png",
                ],
                link: "https://soundcloud.com/helsinki",
            },
            {
                title: "Furious Cool",
                techstack: [
                    "Adobe Photoshop",
                    "Adobe InDesign",
                    "Adobe Illustrator",
                    "Adobe Fonts",
                    "Adobe Premier Pro",
                ],
                description:
                    "Furious Cool (band) needed an organic feeling for their design work. I created the logo using dark card, paint and old-fashioned typographic stamps, photography and then used Photoshop and InDesign to bring the idea together and edit where needed. The poster uses sepia effects to match the logo and the cover for their single, Sit Down, released in 2020. I created a blue chair using pastels. I photographed the image and using Photoshop to enhance, edit and then InDesign to pull the design together. This gives an textural and organic effect to the cover, which is tangible and pleasing. Their Logo was ",
                imageUrl: [
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764086476/Sit_Down_Single_cover_4th_July_22_darker_blue_font_ujdkfg.jpg",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764080686/Photo_with_Logo_tgcmgm.jpg",
                ],
                link: "https://furiouscool.myportfolio.com/",
            },
            {
                title: "Hippy Equivalent",
                techstack: [
                    "Adobe Photoshop",
                    "Adobe Illustrator",
                    "Adobe InDesign",
                ],
                description:
                    "Four single covers for separate songs. Hippy Equivalent is a new musical project. There is a whole album ready to be released, of which artwork ideas are being developed for 2026",
                imageUrl: [
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764081512/Around_the_World_-_HIPEQ_-_high_quality_facebook_nrlnah.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764847003/ROADHIPEQNoScholar_mibwhg.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764086478/Toads_CD_image_boqyga.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764939098/Trigger_CD_image_Indesign_paint_logo_xhc3us.png",
                ],
                link: "https://hippyequivalent.bandcamp.com/music",
            },
            {
                title: "Studio One28",
                techstack: [
                    "Adobe Indesign",
                    "Adobe Illustrator, Adobe Animate",
                ],
                description:
                    "Development of promotional materials for a studio",
                imageUrl: [
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764080680/One28Icon_aizoj1.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764960666/studioOne28AnimateComplex_p26m5p.gif",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764960614/One28Gif_laja9y.gif",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764960607/studioOne28BannerImageRed_Yell_voixr8.png",
                    "https://res.cloudinary.com/djajtxjpr/image/upload/v1764960606/studioOne28ImageBlueLinenYell_dilfrt.png",
                ],
                link: "https://studioone28.com",
            },
        ],
    });
}
main()
    .then(() => console.log("Database seeded!"))
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
