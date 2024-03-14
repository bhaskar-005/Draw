'use client'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";


const WhiteBoard = ({ defaultBlock ,setWhiteboardfile}:any) => {

  return (
    <>
      <Excalidraw
           theme= {localStorage.getItem('theme') == 'dark' ? 'dark':'light' }
           initialData={{
               elements: defaultBlock ? defaultBlock : null //check if it is string of someting block
           }}
           onChange={(excalidrawElements, appState, files)=> setWhiteboardfile(excalidrawElements)}
          >
        <WelcomeScreen>
          <WelcomeScreen.Hints.ToolbarHint>
            <p> ToolBar Hints </p>
          </WelcomeScreen.Hints.ToolbarHint>
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Heading>
              Let's begin crafting your diagram.
            </WelcomeScreen.Center.Heading>
          </WelcomeScreen.Center>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.HelpHint />
        </WelcomeScreen>
        <MainMenu>
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.Help />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
      </Excalidraw>
    </>
  );
};

export default WhiteBoard;
