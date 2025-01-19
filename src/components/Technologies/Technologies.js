import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaBeer } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world as Frontend developer.
      
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaBeer size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Styling</ListTitle>
          <ListParagraph>
            Experiece with <br />
            TailwindCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
