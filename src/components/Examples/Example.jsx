import { useState } from 'react';
import { EXAMPLES } from '../../mock/data';
import Section from '../Section/Section';
import TabButton from '../TabButton/TabButton';
import './Examples.module.scss';

const Example = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelectTabButton = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please choose a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onClick={() => handleSelectTabButton('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onClick={() => handleSelectTabButton('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onClick={() => handleSelectTabButton('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onClick={() => handleSelectTabButton('state')}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
};

export default Example;
