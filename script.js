
const exploreBtn = document.getElementById("exploreBtn");

const description = document.getElementById("description");

exploreBtn.addEventListener("click", function() {

    description.innerText =
        "Lập trình viên phần mềm phân tích yêu cầu, viết code, kiểm thử và sửa lỗi phần mềm. Bạn sẽ cần học lập trình, tư duy logic và làm việc nhóm.";

    exploreBtn.innerText = "Đã khám phá";

});
