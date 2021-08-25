export function Slider(){

    const $slider = document.createElement("div"),
    $ulSlider = document.createElement("ul"),
    $olSlider = document.createElement("ol");


    $ulSlider.innerHTML = `
    <li><a href=""><img src="app/assets/img/1.jpg"></a></li>
    <li><a href=""><img src="app/assets/img/2.jpg"></a></li>
    <li><a href=""><img src="app/assets/img/3.jpg"></a></li>`;

    // class

    
    $slider.classList.add("slider");
    $ulSlider.classList.add("slider-list");
    $olSlider.classList.add("pagination");

    $slider.appendChild($ulSlider);
    $slider.appendChild($olSlider);
    return $slider;

}