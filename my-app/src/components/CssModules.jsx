
import classesTest from "./CssModules.module.scss";

export const CssModules = () => {
    return (
        <div className={classesTest.container}>
            <p className={classesTest.title}>CSS Modulesです。</p>
            <button className={classesTest.button}>ボタン</button>
        </div>
    );
};