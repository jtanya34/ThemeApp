import React, { useState } from 'react';
import { ThemeConsumer } from 'styled-components';
import { Button } from '../styled-elements/index';

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {theme => (
        <Button
          m={2}
          p={2}
          pl={3}
          pr={3}
          variant="primary"
          onClick={e =>
            theme.setTheme(
              theme.mode === 'dark' ? { ...theme, mode: 'light' } : { ...theme, mode: 'dark' },
            )
          }
        >
          {theme.mode}
        </Button>
      )}
    </ThemeConsumer>
  );
}
