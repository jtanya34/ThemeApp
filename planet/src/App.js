import React from 'react';
import { Flex, Button, GlobalStyle } from './styled-elements/index';
import { ThemeProvider } from 'styled-components';
import useTheme from './useTheme';
import ToggleMode from './Components/ToggleMode';

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Flex right={0} position="fixed">
          <ToggleMode />
          <Button
            m={2}
            p={2}
            pl={3}
            pr={3}
            variant="primary"
            onClick={e =>
              theme.setTheme(
                theme.textZoom === 'normal'
                  ? { ...theme, textZoom: 'magnify' }
                  : { ...theme, textZoom: 'normal' },
              )
            }
          >
            Toggle Zoom
          </Button>
        </Flex>
      </>
    </ThemeProvider>
  );
}

export default App;
