import ButtonInvite from '../atoms/ButtonInvite';
import Frontend from '../templates/Frontend'
import * as S from './styles'
import ImageDeD from '../assets/imageDeD.jpg'
import D20Card from '../molecules/D20Card';

function Main() {
  return (
    <Frontend>

      <S.Container>
        <div>
          <h1>R&B a roleplay bot for discord</h1>
          <h6>Developed to improve the experience of playing an RPG campaign.</h6>

          <ButtonInvite></ButtonInvite>
        </div>
        <S.ColumnImage>
          <D20Card />

          <img src={ImageDeD} alt="Uma ilustração de Dungeon and Dragons" />
        </S.ColumnImage>
      </S.Container>

    </Frontend>
  );
}

export default Main
