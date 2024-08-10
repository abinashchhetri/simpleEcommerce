import Container from 'typedi';

type DiProps = {
  name: string;
  model: any;
}[];

export default (props: DiProps) => {
  console.log(props);
  props.forEach(({ model, name }) => {
    Container.set(name, model);
    console.log(model);
  });
};
