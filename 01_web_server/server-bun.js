import {serve} from 'bun';

serve({
    fetch(request){
        const url=new URL(request.url);
        if(url.pathname==='/'){
            return new Response('Hello World from Bun\n',{status:200});
        }
        else if(url.pathname==='/about'){
            return new Response('About\n',{status:200});
        }
        else{
            return new Response('Not Found\n',{status:404});
        }
    },
    port:3000,
    hostname:'127.0.0.1'
});

