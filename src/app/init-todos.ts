export class Init{
        load(){
            if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
                console.log('No todos Found... Creating...');
                var todos = [
                {
                    text: 'text 1'
                },
                {
                    text: 'text 2'
                },
                {
                    text: 'text 4'
                }              
                ];

                localStorage.setItem('todos', JSON.stringify(todos));
                return
            }
            else{
                console.log('found todos');            
            }
        }
    }

