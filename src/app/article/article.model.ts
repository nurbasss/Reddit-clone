export class Article{
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number){
        this.title = title;
        this.link =link;
        this.votes =votes || 0;
    }

    upVote(): void{
        this.votes++;
      }
      downVote(): void{
        this.votes--;
      }

    domain(): string{
        try{
            const domainAndPath: string =this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        }catch(err){
            return null;
        }
    }
}