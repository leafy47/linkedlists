function LinkedList () {
    let list = [];
    
    const append = (value) => {
    for(i = 0; i < list.length; i++) {
            if(list[i].n === null) {
                list[i].n = list.length;
            }
        }
    list.push(Node(value));
};

    const prepend = (value) => {
        for(i = 0; i < list.length; i++) {
            if (!(list[i].n == null)) {
                list[i].n = i + 2;
        }}
        list.push(Node(value, 1));
    };

    let size = () => {
        return list.length;
    };

    let first = () => {
        for(i = 0; i < list.length; i++) {
            if(list[i].n === 1) return list[i];
        }
    };

    let indexNum = (index) => {
        for(i = 0; i < list.length; i++) {
            if(list[i].n === index) return list[i];
        }
    };

    let pop = () => {
        for(i = 0; i < list.length; i++) {
            if(list[i].n === null) list.splice(i, 1);
        };
        for(i = 0; i < list.length; i++) {
            if(list[i].n === list.length) list[i].n = null;
        }                        
    };

    let contVal = (value) => {
        for(i = 0; i < list.length; i++) {
            if(list[i].val === value) return true;
        };
        return false;        
    };

    let tail = () => {
        for(i = 0; i < list.length; i++) {
            if(list[i].n === null) return list[i];
        }        
    };

    let findValue = (value) => {
        for(i = 0; i < list.length; i++) {
            if(list[i].val === value) return list[i].n;
        }
        return null;
    };

    let toString = () => {
        let string = '';
        for (x = 1; x < list.length; x++) {
            for(i = 0; i < list.length; i++) {
                if(list[i].n === x) string = string + list[i].val + ' => ';
            };
        };
        for(i = 0; i < list.length; i++) {
            if(list[i].n === null) string = string + list[i].val + ' => ';
        };
        string = string + 'null';
        return string;
    };

    return {
        append: append,
        list: list,
        prepend: prepend,
        size: size,
        first: first,
        tail: tail,
        indexNum: indexNum,
        pop: pop,
        contVal: contVal,
        findValue: findValue,
        toString: toString,
    };
}

function Node (value = null, nextNode = null) {
    return {
        val: value,
        n: nextNode
    }
}


let josh = LinkedList();

josh.append(5);
josh.prepend(6);
josh.prepend(7);
josh.append(11);
josh.prepend(89);
josh.append(-8);

console.log(josh.list);
console.log(josh.size());
console.log(josh.first());
console.log(josh.tail());
console.log(josh.indexNum(3));
josh.pop();
console.log(josh.list);
console.log(josh.contVal(89));
console.log(josh.contVal(1805));
console.log(josh.findValue(7));
console.log(josh.findValue(885));
console.log(josh.toString());