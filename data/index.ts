export const whitelist = [
    {id: 'african-americans', label: 'African Americans'},
    {id: 'asian-americans', label: 'Asian Americans'},
    {id: 'asian-people', label: 'Asian People'},
    {id: 'americans', label: 'Americans'},
    {id: 'biden', label: 'Biden'},
    {id: 'billionaires', label: 'Billionaires'},
    {id: 'black-people', label: 'Black People'},
    {id: 'brandon', label: 'Brandon'},
    {id: 'capitalists', label: 'Capitalists'},
    {id: 'chinese', label: 'The Chinese'},
    {id: 'congress-memebers', label: 'Congress Members'},
    {id: 'conservatives', label: 'Conservatives'},
    {id: 'criminals', label: 'Criminals'},
    {id: 'democrats', label: 'Democrats'},
    {id: 'elite', label: 'The Elite'},
    {id: 'evangelicals', label: 'Evangelicals'},
    {id: 'everyone', label: 'Everyone'},
    {id: 'felons', label: 'Felons'},
    {id: 'illegals', label: 'Illegals'},
    {id: 'imigrants', label: 'Immigrants'},
    {id: 'israelis', label: 'Israelis'},
    {id: 'jews', label: 'Jews'},
    {id: 'latinos', label: 'Latinos'},
    {id: 'leftists', label: 'Leftists'},
    {id: 'lgbtq', label: 'LGBTQ+'},
    {id: 'liberals', label: 'Liberals'},
    {id: 'libertarians', label: 'Libertarians'},
    {id: 'native-americans', label: 'Native Americans'},
    {id: 'non-binary', label: 'Non-Binary People'},
    {id: 'maga', label: 'MAGA'},
    {id: 'me', label: 'Me'},
    {id: 'men', label: 'Men'},
    {id: 'muslims', label: 'Muslims'},
    {id: 'palestinians', label: 'Palestinians'},
    {id: 'people-of-color', label: 'People of Color'},
    {id: 'poor', label: 'The Poor'},
    {id: 'putin', label: 'Putin'},
    {id: 'republicans', label: 'Republicans'},
    {id: 'racists', label: 'Racists'},
    {id: 'rich', label: 'The Rich'},
    {id: 'right-wingers', label: 'Right Wingers'},
    {id: 'russians', label: 'The Russians'},
    {id: 'selfish', label: 'The Selfish'},
    {id: 'sinners', label: 'Sinners'},
    {id: 'socialists', label: 'Socialists'},
    {id: 'supreme-court-justices', label: 'Supreme Court Justices'},
    {id: 'transgender', label: 'The Transgender'},
    {id: 'trump', label: 'Trump'},
    {id: 'white-people', label: 'White People'},
    {id: 'woke', label: 'The Woke'},
    {id: 'women', label: 'Women'},
    {id: 'you', label: 'You'},
]

export const site_url = 'https://doesjesus.love/';

const affirmatives = [
    'Yes',
    'Absolutely',
    'Of course',
    'Certainly',
    'Definitely',
    'Indeed',
    'Sure did',
    'Without a doubt',
    'Naturally',
    'Even them'
]

export const getAffirmative = () => {
    return affirmatives[Math.floor(Math.random() * affirmatives.length)]
}

export const citations = [
    {
        text: 'Love your enemies, do good to them, and lend to them without expecting to get anything back. Then your reward will be great, and you will be sons of the Most High, because he is kind to the ungrateful and wicked. Be merciful, just as your Father is merciful. (NIV)',
        reference: 'Luke 6:35-36'
    },
    {
        text: 'A new command I give you: Love one another. As I have loved you, so you must love one another. By this all men will know that you are my disciples, if you love one another. (NIV)',
        reference: 'John 13:34-35'
    },
    {
        text: 'Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment. And the second is like it: Love your neighbor as yourself. (NIV)',
        reference: 'Matthew 22:37-39'
    },
    {
        text: 'But I tell you who hear me: Love your enemies, do good to those who hate you, bless those who curse you, pray for those who mistreat you. (NIV)',
        reference: 'Luke 6:27-28'
    }
];
