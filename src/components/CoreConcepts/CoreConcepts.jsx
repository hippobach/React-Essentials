import { CORE_CONCEPTS } from '../../mock/data';
import Section from '../Section/Section';
import CoreConcept from '../CoreConcept/CoreConcept';
import './CoreConcepts.module.scss';

const CoreConcepts = () => {
  return (
    <Section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
