
import classesTest from "./CssModules.module.scss";

export const CssModules = () => {
    return (
        <div className={classesTest.container}>
            <p className={classesTest.title}>CssModulesです。</p>
            <button className={classesTest.button}>ボタン</button>
        </div>
    );
};