import './styles.scss';
interface IService {
    id: number;
    title: string;
    description: string;
    photo: string;
}

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { 
        load(xhttp.response);
    }
};
xhttp.open("GET", "http://localhost:3000/services", true);
xhttp.send();
const serviceWrap: HTMLInputElement | null = document.querySelector(".service");
function load(data: any) {
  if (data) {
    const services: IService[] = JSON.parse(data);
    for (let i=0; i < services.length; i++) {
      const service: HTMLDivElement = document.createElement("div");
      service.setAttribute("class", "service__item");
      const title: HTMLElement = document.createElement("h3");
      const link: HTMLElement = document.createElement("a");
      link.innerText = services[i].title;
      link.setAttribute("class", "service__link");
      title.append(link);
      const text: HTMLElement = document.createElement("p");
      text.innerText = services[i].description;
      text.setAttribute("class", "service__text");
      const bottom: HTMLDivElement = document.createElement("div");
      bottom.setAttribute("class", "service__bottom");
      bottom.append(title);
      bottom.append(text);
      const top: HTMLDivElement = document.createElement("div");
      top.setAttribute("class", "service__top");
      const photo: HTMLElement = document.createElement("a");
      const img: HTMLElement = document.createElement("img");
      img.setAttribute("src", "images/services/" + services[i].photo);
      photo.append(img);
      top.append(photo);
      service.append(top);
      service.append(bottom);
      serviceWrap.append(service);
    }
  }  
}