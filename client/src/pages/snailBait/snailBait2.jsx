import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import bee from "../../assets/bumblebee.png";
import snail from "../../assets/snail.png";
import "./style.css";

function SnailBait() {
    const navigate = useNavigate();

    // Refs for DOM elements
    const gridGameRef = useRef(null);
    const pacmanRef = useRef(null);
    const eyeRef = useRef(null);
    const mouthRef = useRef(null);
    const ghostRef = useRef(null);
    const scoreRef = useRef(null);
    const livesRef = useRef(null);
    const winLoseRef = useRef(null);
    const startBtnRef = useRef(null);

    // Game state
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [gameStatus, setGameStatus] = useState("");

    // Game variables (using refs to persist across renders)
    const gameData = useRef({
        board: ["pink", "blue", "green", "orange", "red", "pink"],
        myBoard: [],
        tempBoard: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1,
            1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 3, 1,
            2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 2, 2, 2, 1, 3, 2, 2,
            1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 3, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,
        ],
        keyz: {
            ArrowRight: false,
            ArrowLeft: false,
            ArrowUp: false,
            ArrowDown: false,
        },
        joystick: {
            active: false,
            origin: { x: 0, y: 0},
            vector: null,
        },
        ghosts: [],
        g: {
            x: "",
            y: "",
            h: 50,
            size: 20,
            ghosts: 5,
            inplay: false,
            startGhost: 11,
        },
        player: {
            pos: 31,
            speed: 4,
            cool: 0,
            pause: false,
            score: 0,
            lives: 3,
            gameOver: true,
            gameWin: false,
            powerUp: false,
            powerCount: 0,
            tog: false,
            play: null,
        },
    
    });



    useEffect(() => {
        const { keyz, joystick, player, g } = gameData.current;

        // Set up refs for game elements
        g.gridGame = gridGameRef.current;
        g.pacman = pacmanRef.current;
        g.eye = eyeRef.current;
        g.mouth = mouthRef.current;
        g.ghost = ghostRef.current;
        g.score = scoreRef.current;
        g.lives = livesRef.current;
        g.winLose = winLoseRef.current;
        g.button = startBtnRef.current;

        // Initial visibility
        if (g.ghost) g.ghost.style.display = "none";
        if (g.pacman) g.pacman.style.display = "none";

        // Keydown handler
        const handleKeyDown = (e) => {
            if (e.code in keyz) {
                keyz[e.code] = true;
            }
            if (!g.inplay && !player.pause) {
                player.play = requestAnimationFrame(move);
                g.inplay = true;
            }
        };
        // Keyup handler
        const handleKeyUp = (e) => {
            if (e.code in keyz) {
                keyz[e.code] = false;
            }
        };
     
  


        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

      

        // Cleanup
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
            if (player.play) {
                cancelAnimationFrame(player.play);
            }
        };
    }, []);

    // Game functions
    // Create the ghost
    const createGhost = () => {
        const { g, ghosts, board } = gameData.current;
        let newGhost = g.ghost.cloneNode(true);
        newGhost.pos = g.startGhost;
        newGhost.style.display = "block";
        newGhost.counter = 0;
        newGhost.defaultColor = board[ghosts.length];
        newGhost.dx = Math.floor(Math.random() * 4);
        newGhost.style.backgroundColor = board[ghosts.length];
        newGhost.style.opacity = "0.6";
        newGhost.namer = board[ghosts.length] + "y";
        ghosts.push(newGhost);
    };

    const findDir = (a) => {
        const { g } = gameData.current;
        let val = [a.pos % g.size, Math.ceil(a.pos / g.size)];
        return val;
    };
//changing Direction of Enemy 
    const changeDir = (enemy) => {
        const { player } = gameData.current;
        let gg = findDir(enemy);
        let pp = findDir(player);
        let ran = Math.floor(Math.random() * 3);
        if (ran < 2) {
            enemy.dx = gg[0] < pp[0] ? 2 : 3;
        } else {
            enemy.dx = gg[1] < pp[1] ? 1 : 0;
        }
        enemy.counter = Math.random() * 7 + 1;
    };
//updating the scoreboard
    const updateScore = () => {
        const { player, g } = gameData.current;
        if (player.lives <= 0) {
            player.gameOver = true;
            g.lives.innerHTML = "GAME OVER";
            setLives(0);
            setGameStatus("GAME OVER");
        } else {
            g.score.innerHTML = `Score : ${player.score}`;
            g.lives.innerHTML = `Lives : ${player.lives}`;
            setScore(player.score);
            setLives(player.lives);
        }
    };
//the position of the player at start of game
    const startPosPlayer = (val) => {
        const { myBoard } = gameData.current;
        if (myBoard[val].t != 1) {
            return val;
        }
        return startPosPlayer(val + 1);
    };
//
    const startPos = () => {
        const { player, ghosts, g, myBoard } = gameData.current;
        player.pause = false;
        let firstStartPos = 20;
        player.pos = startPosPlayer(firstStartPos);
        myBoard[player.pos].append(g.pacman);
        ghosts.forEach((ghost) => {
            let temp = g.startGhost;
            ghost.pos = startPosPlayer(temp);
            myBoard[ghost.pos].append(ghost);
        });
    };

    const gameReset = () => {
        const { player, g } = gameData.current;
        window.cancelAnimationFrame(player.play);
        g.inplay = false;
        player.pause = true;
        if (player.lives <= 0) {
            player.gameOver = true;
            endGame();
        }
        if (!player.gameOver) {
            setTimeout(startPos, 3000);
        }
    };

    const playerWins = () => {
        const { player, g } = gameData.current;
        player.gameWin = true;
        if (startBtnRef.current) startBtnRef.current.style.display = "block";
        if (player.gameWin) {
            g.winLose.innerHTML = "YOU WIN!";
            g.button.innerHTML = "NEXT LEVEL";
            setGameStatus("YOU WIN!");
        } else {
            g.winLose.innerHTML = "YOU LOSE!";
            setGameStatus("YOU LOSE!");
        }
    };

    const endGame = () => {
        const { player, g } = gameData.current;
        player.gameWin = false;
        if (startBtnRef.current) startBtnRef.current.style.display = "block";
        if (g.gridGame) g.gridGame.style.display = "none";
    };
    
//moving in play
    const move = () => {
        const { player, g, myBoard, ghosts, keyz, joystick } = gameData.current;

        if (g.inplay) {
            player.cool--;
            if (player.cool < 0) {
                let tempPower = 0;
                if (player.powerUp) {
                    player.powerCount--;
                    g.pacman.style.backgroundColor = "red";
                    if (player.powerCount < 20) {
                        g.pacman.style.backgroundColor = "orange";
                        if (player.powerCount % 2) {
                            g.pacman.style.backgroundColor = "white";
                        }
                    }
                    if (player.powerCount <= 0) {
                        player.powerUp = false;
                        g.pacman.style.backgroundColor = "yellow";
                        tempPower = 1;
                    }
                }

                ghosts.forEach((ghost) => {
                    if (tempPower == 1) {
                        ghost.style.backgroundColor = ghost.defaultColor;
                    } else if (player.powerCount > 0) {
                        if (player.powerCount % 2) {
                            ghost.style.backgroundColor = "white";
                        } else {
                            ghost.style.backgroundColor = "teal";
                        }
                    }
                    myBoard[ghost.pos].append(ghost);
                    ghost.counter--;

                    let oldPOS = ghost.pos;

                    if (ghost.counter <= 0) {
                        changeDir(ghost);
                    } else {
                        if (ghost.dx == 0) {
                            ghost.pos -= g.size;
                        } else if (ghost.dx == 1) {
                            ghost.pos += g.size;
                        } else if (ghost.dx == 2) {
                            ghost.pos += 1;
                        } else if (ghost.dx == 3) {
                            ghost.pos -= 1;
                        }
                    }

                    if (ghost.stopped > 0) {
                        ghost.stopped--;
                        ghost.pos = oldPOS;
                    }

                    if (player.pos == ghost.pos) {
                        if (player.powerCount > 0) {
                            player.score += 100;
                            ghost.stopped = 100;
                            ghost.pos = g.startGhost;
                        } else {
                            player.lives--;
                            gameReset();
                        }
                        updateScore();
                    }

                    let valGhost = myBoard[ghost.pos];
                    if (valGhost.t == 1) {
                        ghost.pos = oldPOS;
                        changeDir(ghost);
                    }
                    if (ghost.stopped > 0) {
                        ghost.stopped--;
                        ghost.pos = startPosPlayer(g.startGhost);
                    }

                    myBoard[ghost.pos].append(ghost);
                });

                let tempPos = player.pos;
                if (keyz.ArrowRight) {
                    player.pos += 1;
                    g.eye.style.left = "20%";
                    g.mouth.style.left = "60%";
                } else if (keyz.ArrowLeft) {
                    player.pos -= 1;
                    g.eye.style.left = "60%";
                    g.mouth.style.left = "0%";
                } else if (keyz.ArrowUp) {
                    player.pos -= g.size;
                } else if (keyz.ArrowDown) {
                    player.pos += g.size;
                }

                let newPlace = myBoard[player.pos];
                if (newPlace.t == 1 || newPlace.t == 4) {
                    player.pos = tempPos;
                }

                if (newPlace.t == 3) {
                    player.powerCount = 100;
                    player.powerUp = true;
                    myBoard[player.pos].innerHTML = "";
                    player.score += 10;
                    updateScore();
                    newPlace.t = 0;
                }

                if (newPlace.t == 2) {
                    myBoard[player.pos].innerHTML = "";
                    let tempDots = document.querySelectorAll(".dot");
                    if (tempDots.length == 0) {
                        player.gameWin = true;
                        playerWins();
                    }
                    player.score++;
                    updateScore();
                    newPlace.t = 0;
                }

                if (player.pos != tempPos) {
                    if (player.tog) {
                        g.mouth.style.height = "25%";
                        player.tog = false;
                    } else {
                        g.mouth.style.height = "10%";
                        player.tog = true;
                    }
                }
                player.cool = player.speed;
            }
        }
        if (!player.pause) {
            myBoard[player.pos].append(g.pacman);
            player.play = requestAnimationFrame(move);
        }
    };
// creating and naming the different types of square on the board 
    const createSquare = (val) => {
        const { g, myBoard } = gameData.current;
        const div = document.createElement("div");
        div.classList.add("box");
        if (val == 1) {
            div.classList.add("wall");
        }
        if (val == 2) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            div.append(dot);
        }
        if (val === 4) {
            div.classList.add("hideout");
            if (g.startGhost == 11) {
                g.startGhost = myBoard.length;
            }
        }
        if (val == 3) {
            const superDot = document.createElement("div");
            superDot.classList.add("superDot");
            div.append(superDot);
        }
        g.gridGame.append(div);
        myBoard.push(div);
        div.t = val;
        div.idVal = myBoard.length;
    };

    const createGame = () => {
        const { g, tempBoard, myBoard } = gameData.current;
        for (let i = 0; i < g.ghosts; i++) {
            createGhost();
        }
        tempBoard.forEach((cell) => {
            createSquare(cell);
        });
        for (let i = 0; i < g.size; i++) {
            g.x += ` ${g.h}px`;
        }
        g.gridGame.style.gridTemplateColumns = g.x;
        g.gridGame.style.gridTemplateRows = g.x;
        startPos();
    };

    const boardBuilder = () => {
        const { tempBoard, g } = gameData.current;
        tempBoard.length = 0;
        let boxSize =
            document.documentElement.clientHeight <
            document.documentElement.clientWidth
                ? document.documentElement.clientHeight
                : document.documentElement.clientWidth;
        g.h = boxSize / g.size - boxSize / (g.size * 5);
        let tog = false;
        for (let x = 0; x < g.size; x++) {
            let wallz = 0;
            for (let y = 0; y < g.size; y++) {
                let val = 2;
                wallz--;
                if (wallz > 0 && (x - 1) % 2) {
                    val = 1;
                } else {
                    wallz = Math.floor(Math.random() * (g.size / 2));
                }
                if (x == 1 || x == g.size - 3 || y == 1 || y == g.size - 2) {
                    val = 2;
                }
                if (x == g.size - 2) {
                    if (!tog) {
                        g.startGhost = tempBoard.length;
                        tog = true;
                    }
                    val = 4;
                }
                if (y == 3 || y == g.size - 4) {
                    if (x == 1 || x == g.size - 3) {
                        val = 3;
                    }
                }
                if (x == 0 || x == g.size - 1 || y == 0 || y == g.size - 1) {
                    val = 1;
                }
                tempBoard.push(val);
            }
        }
        starterGame();
    };

    const starterGame = () => {
        const { myBoard, ghosts, player, g } = gameData.current;
        myBoard.length = 0;
        ghosts.length = 0;
        g.gridGame.innerHTML = "";
        g.x = "";
        if (!player.gameWin) {
            player.score = 0;
            player.lives = 3;
        } else {
            player.gameWin = false;
        }
        player.gameOver = false;
        setGameStarted(true);
        createGame();
        updateScore();
        g.gridGame.focus();
        g.gridGame.style.display = "gridGame";
        if (startBtnRef.current) startBtnRef.current.style.display = "none";
        if (g.pacman) g.pacman.style.display = "block";
    };

    return (
        <div className="containerGame">
            <div className="scoreBoard">
                <div className="title">Snail-bait!</div>
                <div className="score" ref={scoreRef}>
                    Score: {score}
                </div>
                <div className="lives" ref={livesRef}>
                    Lives: {lives}
                </div>
                <div className="winLose" ref={winLoseRef}>
                    {gameStatus}
                </div>
                <button className="btn" onClick={() => navigate("/townscene")}>
                    Back To Town
                </button>
            </div>

            <div className="gridGame" ref={gridGameRef} tabIndex={0}></div>

            <div className="btnDiv">
                <button
                    className="btn"
                    ref={startBtnRef}
                    onClick={() => {
                        boardBuilder();
                        //console.log('the game has started', gameStarted);
                    }}
                >
                    Start Game
                </button>
            </div>
            {/*JOYSTICK */}
            <div className="joystick fixed bottom-12 place-self-center">
                    {/*Outer base */}
                    <div
                        className="base relative w-32 h-32 rounded-full
                            bg-purple-700/80
                            border-4 border-purple-400
                            shadow-lg shadow-purple-900/40
                            flex items-center justify-center">

                        {/*Inner thumb*/}
                        <div
                        className="stick w-10 h-10 rounded-full
                                bg-green-400
                                border-4 border-green-200
                                shadow-md shadow-green-600/50">
                        </div>

                    </div>
                    </div>
                    <div className="instructions w-full h-auto p-4 mt-4 text-center text-lg font-courier text-purple-700/80 rgba(104, 62, 62, 0.8) bg-amber-100">
                    USE : ARROWS | JOYSTICK | MOUSE | TOUCH
                    </div>
            <div className="ghost" ref={ghostRef}>
                <img
                    src={bee}
                    className="bee"
                    width="150%"
                    height="auto"
                    alt="bee"
                    aria-label="bee"
                />
                <div className="eyes eyeLeft"></div>
                <div className="eyes eyeRight"></div>
            </div>

            <div className="pacman" ref={pacmanRef}>
                <img
                    src={snail}
                    className="snail"
                    width="200%"
                    height="auto"
                    alt="snail"
                    aria-label="snail"
                />
                <div className="eye" ref={eyeRef}></div>
                <div className="mouth" ref={mouthRef}></div>
            </div>
        </div>
    );
}

export default SnailBait;
