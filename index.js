window.onload = () => {
    const githubIcon = "https://img.icons8.com/material-outlined/60/000000/github.png";

    // Contact info
    const phone = {
        title: "(+351) 920 438 006",
        img: "https://img.icons8.com/color/48/000000/phone.png",
        link: "",
        text: "Call me"
    }

    const skype = {
        title: "(+351) 920 438 006",
        img: "https://img.icons8.com/color/48/000000/skype.png",
        link: "skype:lourenzo86@outlook.com?chat",
        text: "Chat with me on Skype"
    }

    const email = {
        title: "costa86@zoho.com",
        img: "https://img.icons8.com/color/48/000000/email.png",
        link: "mailto:costa86@zoho.com/",
        text: "Send me an email"
    }

    const linkedin = {
        title: "linkedin.com/in/costa86",
        img: "https://img.icons8.com/color/48/000000/linkedin.png",
        link: "https://www.linkedin.com/in/costa86/",
        text: "Connect with me on LinkedIn"
    }

    const github = {
        title: "github.com/costa86",
        img: "https://img.icons8.com/material-outlined/48/000000/github.png",
        link: "https://github.com/costa86",
        text: "Check out my GitHub repository"
    }

    let contacts = [phone, skype, email, linkedin];

    let contactBox = document.getElementsByClassName("contact-box")[0];

    for (let i of contacts) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        let a = document.createElement("a");

        div.className = "custom-effect";
        h3.innerHTML = i.title;
        img.src = i.img;
        img.title = i.text;

        a.href = i.link;
        a.target = "_blank";
        a.appendChild(img);

        div.appendChild(a);
        div.appendChild(h3);

        contactBox.appendChild(div);

    }

    // Contact info

    // Projects
    const barcode = {
        title: "BARCODE PRICE",
        description: `Android mobile app that scans products' barcodes 
        and finds better deals for them on online stores.`,
        stack: "Java, Android, SQLite",
        demo: "https://play.google.com/store/apps/details?id=com.costa86.barcodeprice",
        source: "https://github.com/costa86/BarcodePrice",
        imgDemo: "https://img.icons8.com/color/60/000000/google-play.png",
        imgSource: githubIcon,
        imgTitle: "https://img.icons8.com/color/60/000000/android-os.png",
        htmlTitle: "Download this app on Google Play",
        sourceText: "See the source code",

        features: [
            "Saves user's coordenates",
            "Navigates to the place where the product was scanned",
            "Shares the product search result via sms, email, social media, etc",
            "Redirects to product page on the online store",
        ]
    };

    const sgfJava = {
        title: "VEHICLE FLEET MANAGEMENT",
        description: `Desktop app to manage vehicle fleets (the app is in portuguese)`,
        stack: "Java + Swing",
        demo: "https://github.com/costa86/VehicleFleetManagement/blob/master/GestaoFrota.jar",
        source: "https://github.com/costa86/VehicleFleetManagement",
        imgDemo: "https://img.icons8.com/color/60/000000/java-coffee-cup-logo.png",
        imgSource: githubIcon,
        imgTitle: "https://img.icons8.com/color/60/000000/java-coffee-cup-logo.png",
        sourceText: "See the source code",
        htmlTitle: "Download the ready-to-use software",
        features: [
            "Register vehicles", "employees", "suppliers",
            "Register fuel entries", "maintenances", "accidents",
            "Backup data (.csv)"
        ]

    };

    const reactAPI = {
        title: "REACT WITH API FETCH",
        description: `Web app to search and display information about movies. 
        The data is obtained from an API`,
        stack: "JavaScript, React, HTML, CSS, SASS",
        demo: "https://costa86.github.io/react-api",
        source: "https://github.com/costa86/react-api",
        imgDemo: "https://img.icons8.com/color/60/000000/internet.png",
        imgSource: githubIcon,
        imgTitle: "https://img.icons8.com/color/60/000000/react-native.png",
        sourceText: "See the source code",
        htmlTitle: "See this website in action",
        features: [
            "Search for a movie/serie",
            "See list of results",
            "See each movie's details page",
        ]
    };

    const hackaton = {
        title: "HACKATHON PORTO METROPOLITAN AREA",
        description:
            `Hackathon project presented at MATROLAB AMP hackathon in Porto city, Portugal. 
            I created tableau data visualizations using data scraped from the web, with Python`,
        stack: "Python, Tableau",
        demo: "https://public.tableau.com/profile/louren.o.costa#!/vizhome/Factoresdeinflunciarecolhaseletiva-LIPOR2017/DASHBOARD",
        source: "https://gist.github.com/costa86/9fef1fc6129c9fe0c7af04b1e33abc29",
        imgDemo: "https://img.icons8.com/color/60/000000/tableau-software.png",
        imgSource: githubIcon,
        imgTitle: "https://img.icons8.com/color/60/000000/python.png",
        htmlTitle: "See one of the Tableau data visualizations",
        sourceText: "Source code for one of the Python web scrapings",
        features: [
            "Presents data on intuitive visualizations",
            "Plots containers' exact locations on google maps"
        ]
    };


    let projects = [barcode, sgfJava, reactAPI, hackaton];

    let portfolioGrid = document.getElementsByClassName("portfolio-grid")[0];


    for (let i of projects) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let imgMain = document.createElement("img");
        let imgSource = document.createElement("img");
        let imgDemo = document.createElement("img");
        let aDemo = document.createElement("a");
        let aSource = document.createElement("a");
        let pDesc = document.createElement("p");
        let pStack = document.createElement("p");
        let ulFeatures = document.createElement("ul");

        for (let n of i.features) {
            let li = document.createElement("li");
            li.innerHTML = n;
            ulFeatures.appendChild(li);

        }

        pDesc.innerHTML = i.description;
        pStack.innerHTML = i.stack;

        div.className = "card custom-effect";
        h3.innerHTML = i.title;
        imgMain.src = i.imgTitle;
        imgDemo.src = i.imgDemo;
        imgDemo.className = imgSource.className = "imgPlus";
        imgDemo.title = i.htmlTitle;
        imgSource.src = i.imgSource;
        imgSource.title = i.sourceText;
        aSource.href = i.source;
        aDemo.href = i.demo;
        aSource.target = aDemo.target = "_blank";

        aSource.appendChild(imgSource);
        aDemo.appendChild(imgDemo);

        div.appendChild(imgMain);
        div.appendChild(h3);
        div.appendChild(pDesc);
        div.appendChild(document.createElement("hr"));
        div.appendChild(pStack);
        div.appendChild(document.createElement("hr"));
        div.appendChild(ulFeatures);
        div.appendChild(document.createElement("hr"));
        div.appendChild(aDemo);
        div.appendChild(aSource);

        portfolioGrid.appendChild(div);

    }
    // Projects

}