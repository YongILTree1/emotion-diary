import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("id : ", id);

  const mode = searchParams.get("mode");
  console.log("mode : ", mode);

  return (
    <div className="edit">
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지입니다.</p>
      <button
        onClick={() => {
          setSearchParams({ who: "YongTree" });
        }}
      >
        QS바꾸기
      </button>

      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 이동
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Edit;
