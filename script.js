class  TableBuild {
    constructor(obj) {
        this.item= obj.item;
        this.rowClick= obj.rowClick;
        this.selected = obj.selected;
        this.displayName=obj.displayName;
    }
    createElement(a){
        this.parentElement = document.createElement('tr');
        this.parentElement.classList = 'tr';
        header.forEach(value => {
            var td = document.createElement('td');
            td.innerText = this.item[value]?this.item[value]:"";
            td.onclick = (e) =>{
                this.rowClick(this.item)
                this.displayName(td.innerText)
            };
            this.parentElement.append(td);
        })
        var check = document.createElement("input");
        check.type = "checkbox";
        check.id = "checkbox";
        check.onclick = () => {
            if(check.checked) {
                this.selected(this.item)
            }
        }
        this.parentElement.append(check);
        return this.parentElement;
    }
}
class Table {
    constructor(obj){
      this.items = obj.items.data;
      this.header = obj.header;
      this.tab = obj.tab;
      this.rowClick = obj.rowClick;
      this.selected = obj.selected;
      this.displayName= obj.displayName;
      this.displayValue= obj.displayValue;
      this.createTable();
    }

    createTable(){
        if(Array.isArray(this.items)){
            this.items = this.items.map(item=>{
                    return new TableBuild({
                        item: item,
                        onclick: item.value === this.current,
                        rowClick: this.rowClick.bind(this),
                        selected: this.selected.bind(this),
                        displayName: this.displayName,
                    }).createElement();
            })
        }
       this.items.forEach(i=> this.tab.append(i))
    }
    rowClick(value){
        if(typeof this.rowClick ==='function'){
            this.rowClick(value)
        }
    }
    selected(value){
        if(typeof this.rowClick ==='function') {
            this.selected(value)
        }
    }
    displayName (value){
        if(typeof this.rowClick ==='function'){
            this.displayName(value)
        }
    }
}