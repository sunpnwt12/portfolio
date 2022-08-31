
export interface Contacts {
    id: number;
    name: string;
    link: string;
    icon: string;
    behavior: string;
}

export interface TechStack {
    id: number;
    type: string;
    industry: string[];
    name: string;
    imglink: string;
};

export interface Papers {
    id: number;
    title: string;
    proceedings: string;
    publishedDate: string;
    link: string
};

export const contacts = [
    {id: 1, name: "Twitter", link: "https://twitter.com/sunpnwt4", icon: "https://img.icons8.com/stickers/344/twitter.png", behavior: "_blank"},
    {id: 2, name: "Github", link: "https://github.com/sunpnwt12", icon: "https://img.icons8.com/stickers/344/github.png", behavior: "_blank"},
    {id: 3, name: "E-mail", link: "#email", icon: "https://img.icons8.com/stickers/344/new-post.png", behavior: "_self"},
    {id: 4, name: "Kaggle", link: "https://www.kaggle.com/sunpnwt12", icon: "https://img.icons8.com/stickers/344/k.png", behavior: "_blank"},
]


export const techStack = [
    // template
    // {id: ,type: "", industry: [], name: "", imglink: ""},
    {id: 1, type: "lang", industry: ["Web", "Data", "ML/DL"], name: "Python", imglink: "https://www.vectorlogo.zone/logos/python/python-icon.svg"},
    {id: 2, type: "lang", industry: ["Web"], name: "Typescript", imglink: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"},
    {id: 3, type: "lang", industry: ["Web"], name: "Go", imglink: "https://www.vectorlogo.zone/logos/golang/golang-icon.svg"},
    {id: 4, type: "tools", industry: ["Data", "ML/DL"], name: "Pytorch", imglink: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"},
    {id: 5, type: "tools", industry: ["Data", "ML/DL"], name: "TensorFlow", imglink: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"},
    {id: 6, type: "tools", industry: ["Data"], name: "PyData Stack", imglink: "https://pydata.org/wp-content/uploads/2020/07/pydata_logo_only_transparent-1.png"},
    {id: 7, type: "tools", industry: ["Data"], name: "Spark", imglink: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg"},
    {id: 8, type: "tools", industry: ["Web"], name: "Svelte", imglink: "https://vectorwiki.com/images/TI19Y__svelte.svg"},
    {id: 9, type: "tools", industry: ["Web"], name: "Tailwind CSS", imglink: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"},
    {id: 10, type: "tools", industry: ["Web"], name: "FastAPI", imglink: "https://vectorwiki.com/images/i0tvc__fastapi.svg"},
    {id: 11, type: "editor", industry: [""], name: "Neovim", imglink: "https://www.vectorlogo.zone/logos/neovimio/neovimio-icon.svg"},
    {id: 12, type: "editor", industry: [""], name: "VSCode", imglink: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"},
]

export const papers = [
    {
        "id": 1,
        "title": "Change Detection in Drilling Process Based on Temperature Nearby Cutting Edge by LSTM Neural Network",
        "proceedings": "2020 International Symposium on Flexible Automation",
        "publishedDate": "September 25, 2020",
        "link": "https://doi.org/10.1115/ISFA2020-9616",
    }
]