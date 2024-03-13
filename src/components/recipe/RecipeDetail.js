import {Fragment, useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom";
import {fetchRecipeDetail} from "../../actions/foodActions";
import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
// useSelector => store안에 있는 데이터를 선택해서 가지고 온다
// useDispatch => action에 있는 함수 호출 => reducers => store
/*
     Front => MVC
     React => Redux
     Vue   => Vuex
 */
function RecipeDetail(){
    const nav=useNavigate()
    const {no}=useParams()//String no=getParameter("no")
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchRecipeDetail(no)) //store 에 저장 완료
    }, []); // mounted => componentDidMount => window.onload
    // [curpage] => curpage가 변경이 되는 재호출
    // => react-query  useQuery() , useQueues => 새로운 내용이 있는 경우 자동 재호출
    const recipe_detail=useSelector((state)=>state.foods.recipe_detail)
    console.log(recipe_detail)
    const recipe_data=recipe_detail
    //const recipe_images=recipe_detail.posters
    //const recipe_make=recipe_detail.make

    return (
        <div className={"row"}>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        <img src={recipe_data.poster} style={{"width": "600px", "height": "200px"}}/>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        <h3 className={"text-center"}>{recipe_data.title}</h3>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        {recipe_data.content}
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"}><img src={process.env.PUBLIC_URL+"/icon/a1.png"}/></td>
                    <td className={"text-center"}><img src={process.env.PUBLIC_URL+"/icon/a2.png"}/></td>
                    <td className={"text-center"}><img src={process.env.PUBLIC_URL+"/icon/a3.png"}/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>{recipe_data.info1}</td>
                    <td className={"text-center"}>{recipe_data.info2}</td>
                    <td className={"text-center"}>{recipe_data.info3}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RecipeDetail