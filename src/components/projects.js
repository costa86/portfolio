import iconGithub from "./../assets/icons/github.png";
import iconAndroid from "./../assets/icons/android.png";
import iconJava from "./../assets/icons/java.png";
import iconReact from "./../assets/icons/react.png";
import iconPython from "./../assets/icons/python.png";
import iconGooglePlay from "./../assets/icons/google-play.png";
import iconVideo from "./../assets/icons/video.png";
import iconWebsite from "./../assets/icons/website.png";
import iconTableau from "./../assets/icons/tableau.png";
import iconWebpack from "./../assets/icons/webpack.png";
import iconNA from "./../assets/icons/na.png";

const videoText = "Watch short video for this project";

const barcode = {
    title: "BARCODE PRICE",
    description: `Android mobile app that scans products' barcodes 
    and finds better deals for them on online stores.`,
    stack: "Java, Android, SQLite",
    demo: "https://play.google.com/store/apps/details?id=com.costa86.barcodeprice",
    source: "https://github.com/costa86/BarcodePrice",
    imgDemo: iconGooglePlay,
    imgSource: iconGithub,
    imgTitle: iconAndroid,
    htmlTitle: "Download this app on Google Play",
    sourceText: "See the source code",

    features: [
        "Saves user's coordenates",
        "Navigates to the place where the product was scanned",
        "Shares the product search result via sms, email, social media, etc",
        "Redirects to product page on the online store",
    ],
    videoImg: iconNA,
    videoUrl: "#",
    videoText: "Video not available. You can download the app"
};

const sgfJava = {
    title: "VEHICLE FLEET MANAGEMENT",
    description: `Desktop app to manage vehicle fleets (the app is in portuguese)`,
    stack: "Java + Swing",
    demo: "https://github.com/costa86/VehicleFleetManagement/blob/master/GestaoFrota.jar",
    source: "https://github.com/costa86/VehicleFleetManagement",
    imgDemo: iconJava,
    imgSource: iconGithub,
    imgTitle: iconJava,
    sourceText: "See the source code",
    htmlTitle: "Download the ready-to-use software",
    features: [
        "Register vehicles", "employees", "suppliers",
        "Register fuel entries", "maintenances", "accidents",
        "Backup data (.csv)"
    ],
    videoImg: iconVideo,
    videoUrl: "https://share.vidyard.com/watch/iDbowZtirvpyzL8umf5TTf?",
    videoText: videoText

};

const reactAPI = {
    title: "REACT WITH API FETCH",
    description: `Web app to search and display information about movies. 
    The data is obtained from an API`,
    stack: "JavaScript, React, HTML, CSS, SASS",
    demo: "https://costa86.github.io/react-api",
    source: "https://github.com/costa86/react-api",
    imgDemo: iconWebsite,
    imgSource: iconGithub,
    imgTitle: iconReact,
    sourceText: "See the source code",
    htmlTitle: "See this website in action",
    features: [
        "Search for a movie/serie",
        "See list of results",
        "See each movie's details page",
    ],
    videoImg: iconVideo,
    videoUrl: "https://share.vidyard.com/watch/FFPuX2ERuAoqiV9QDFixXN?",
    videoText: videoText

};

const upholdClone = {
    title: "UPHOLD CLONE",
    description: `Web app to search currency exchange rates, based on Uphold website. 
    The data is obtained from Uphold's SDK`,
    stack: "JavaScript, React, HTML, CSS, SASS",
    demo: "#",
    source: "https://github.com/costa86/challenge",
    imgDemo: iconNA,
    imgSource: iconGithub,

    imgTitle: iconReact,
    sourceText: "See the source code",
    htmlTitle: "Demo not available. Watch the video",
    features: [
        "Search for a movie/serie",
        "See list of results",
        "See each movie's details page",
    ],
    videoImg: iconVideo,
    videoUrl: "https://share.vidyard.com/watch/m8wJe5jLH91bwfc8Wmyg2w?",
    videoText: videoText

};

const hackaton = {
    title: "HACKATHON PORTO METROPOLITAN AREA",
    description:
        `Hackathon project presented at MATROLAB AMP hackathon in Porto city, Portugal. 
        I created tableau data visualizations using data scraped from the web, with Python`,
    stack: "Python, Tableau",
    demo: "https://public.tableau.com/profile/louren.o.costa#!/vizhome/Factoresdeinflunciarecolhaseletiva-LIPOR2017/DASHBOARD",
    source: "https://gist.github.com/costa86/9fef1fc6129c9fe0c7af04b1e33abc29",
    imgDemo: iconTableau,
    imgSource: iconGithub,
    imgTitle: iconPython,
    htmlTitle: "See one of the Tableau data visualizations",
    sourceText: "Source code for one of the Python web scrapings",
    features: [
        "Presents data on intuitive visualizations",
        "Plots containers' exact locations on google maps"
    ],
    videoImg: iconNA,
    videoUrl: "#",
    videoText: "No video for this. See the tableau visualization"

};

const portfolio = {
    title: "MY PORTFOLIO (THIS WEBSITE)",
    description:
        `Portfolio for a web developer`,
    stack: "JavaScript, WebPack, HTML, CSS, SASS",
    demo: "http://www.costa86.com",
    source: "https://github.com/costa86/portfolio",
    imgDemo: iconWebsite,
    imgSource: iconGithub,
    imgTitle: iconWebpack,
    htmlTitle: "See the website",
    sourceText: "Source code for my portfolio website",
    features: [
        "Bundled with WebPack",
    ],
    videoImg: iconNA,
    videoUrl: "#",
    videoText: "Video not necessary (you are here)"

};



export let projects = [barcode, sgfJava, reactAPI, hackaton, portfolio, upholdClone];