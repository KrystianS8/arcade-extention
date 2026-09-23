//% color="#8B4513" weight=100 icon="\uf007" block="Game Origins"
namespace origins {
    let currentStudio = "My Studio";
    let currentGame = "Cool Game";
    let currentDirector = "Me";

    /**
     * Set the name of the studio creating the game.
     */
    //% block="set studio name to $name"
    //% blockId=origins_set_studio
    //% weight=40
    export function setStudioName(name: string): void {
        currentStudio = name;
    }

    /**
     * Set the name of the game.
     */
    //% block="set game title to $title"
    //% blockId=origins_set_game
    //% weight=30
    export function setGameTitle(title: string): void {
        currentGame = title;
    }

    /**
     * Set the name of the game director.
     */
    //% block="set director name to $director"
    //% blockId=origins_set_director
    //% weight=20
    export function setDirectorName(director: string): void {
        currentDirector = director;
    }

    /**
     * Show the cinematic game intro splash screens.
     */
    //% block="show intro sequence"
    //% blockId=origins_show_intro
    //% weight=10
    export function showIntro(): void {
        // Clear screen and show Studio
        scene.setBackgroundColor(15);
        game.splash(currentStudio + " Presents...", "");
        
        // Show Director
        game.splash("Directed by " + currentDirector, "");
        
        // Show Game Title
        game.splash(currentGame, "Get Ready to Play!");
    }
}