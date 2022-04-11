function switchTheme(){
    let root = document.querySelector(":root");
    
    let rs = getComputedStyle(root);
    console.log(rs.getPropertyValue('--theme'));
    if (rs.getPropertyValue('--theme') == "white"){
        root.style.setProperty('--theme', 'rgb(42, 41, 48)');
    }
    else{
        root.style.setProperty('--theme', 'white');
    }
}