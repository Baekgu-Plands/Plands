import {
  Container,
  Form,
  Label,
} from "./UserInfoUpdateMain.style";

function UserInfoUpdateMain() {
  return (
    <Container>
      <Form>
        <Label>
          <label>아이디</label>
          <input type="text" value="plands" disabled />
        </Label>
        <Label>
          <label>이름</label>
          <input type="text" value="손흥민" />
        </Label>
        <Label>
          <label>닉네임</label>
          <input type="text" value="플랜즈" />
        </Label>
        <Label>
          <label>성별</label>
          <input type="text" value="남" />
        </Label>
        <Label>
          <label>생년월일</label>
          <input type="text" value="960320" />
        </Label>
        <Label>
          <label>전화번호</label>
          <input type="text" value="01073297703" />
        </Label>
        <Label>
          <label>이메일</label>
          <input
            type="text"
            value="scbsoccer@naver.com"
            disabled
          />
        </Label>
        <button>수정 완료</button>
        <button>취소</button>
      </Form>
    </Container>
  );
}

export default UserInfoUpdateMain;