function edit(element,match,replace){
    const text = element.textContent;
    element.textContent = text.split(match).join(replace)
}