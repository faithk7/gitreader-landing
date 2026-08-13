import {Composition, Folder} from 'remotion';
import {ProductDemo} from './ProductDemo';
import {CTAScene} from './scenes/CTAScene';
import {ProblemScene} from './scenes/ProblemScene';
import {ProductScene} from './scenes/ProductScene';
import {TitleScene} from './scenes/TitleScene';
import {WorkflowScene} from './scenes/WorkflowScene';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="GitReader-Promo-Scenes">
        <Composition id="GitReaderTitle" component={TitleScene} durationInFrames={120} fps={30} width={1920} height={1080} />
        <Composition id="GitReaderProblem" component={ProblemScene} durationInFrames={120} fps={30} width={1920} height={1080} />
        <Composition id="GitReaderProduct" component={ProductScene} durationInFrames={120} fps={30} width={1920} height={1080} />
        <Composition id="GitReaderWorkflow" component={WorkflowScene} durationInFrames={120} fps={30} width={1920} height={1080} />
        <Composition id="GitReaderCTA" component={CTAScene} durationInFrames={120} fps={30} width={1920} height={1080} />
      </Folder>
      <Composition
        id="GitReaderPromoTest"
        component={ProductDemo}
        durationInFrames={540}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
