import Frontend from '../templates/Frontend'
import * as S from './styles'
import ProductInformation from '../organisms/ProductInformation';
import ProductStats from '../organisms/ProductStats';

function Main() {
  return (
    <Frontend>
      <S.Container>
        <ProductInformation />
        <ProductStats />
      </S.Container>
    </Frontend>
  );
}

export default Main