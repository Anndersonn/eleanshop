import Skeleton from "react-loading-skeleton"
// import './index.css'


const SideLoader = (props) => (
    <div className="card-skeleton">
    <div className="card-box">
      <Skeleton box height={300}/>
    </div>
    <div className="card-main__info">
    <Skeleton width={180}/>
    <Skeleton width={50} circle/>
    </div>
    <div className="card-secondary__info">
    <Skeleton />
    <Skeleton />
    </div>
</div>
)

export default SideLoader;

