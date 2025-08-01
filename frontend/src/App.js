import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import BackworkDashboard from './Pages/Backwork/Dashborad.jsx';
import PostPishSabReject from './Pages/BackSub/Reject/PostRejectBackSub.jsx'
import AddItem from './Pages/Backwork/post';
import ManagerDashboard from './Pages/Manager/ManagerDashboard.js';
import MaterialFronWorkDashboard from './Pages/Manager/MaterialFrontWork/MaterialFrontWork.jsx'
import PostAddItemMaterialFrontWork from './Pages/Manager/MaterialFrontWork/PostMaterialFrontWork.jsx';
import CoupeStorageDashboard from './Pages/CoupeStorage/CoupeStorageDashborad.jsx';
import CoupeStorageAddItem from './Pages/CoupeStorage/PostCoupeStorage.jsx';
import CoupeStorageItemList from './Pages/CoupeStorage/GetCoupteStorage.jsx'; 
import CutDashboard from './Pages/Cut/CutDashborad.jsx';
import GetCutItemList from './Pages/Cut/GetCut.jsx'
import PostCutAddItem from './Pages/Cut/PostCut.jsx';
import PishSabDashboard from './Pages/BackSub/Dashborad.jsx'
import PostBackSubAddItem from './Pages/BackSub/PostBackSub.jsx';
import VaciumDashboard from './Pages/Vacium/VaciumDashborad.jsx';
import GetVaciumItemList from './Pages/Vacium/GetVacium.jsx';
import PostVaciumAddItem from './Pages/Vacium/PostVacium.jsx';
import SabDashboard from './Pages/Sab/Dashborad.jsx';
import PostSabAddItem from './Pages/Sab/PostSab.jsx';
import FurnaceDashboard from './Pages/Furnace/FurnaceDashborad.jsx';
import GetFurnaceItemList from './Pages/Furnace/GetFurnace.jsx';
import PostFurnaceAddItem from './Pages/Furnace/PostFurnace.jsx';
import StorageDashboard from './Pages/Storage/StorageDashborad.jsx';
import MaterialVaciumDashboard from './Pages/Storage/MateriaVaciumStorage/StorageMateerial.jsx';
import PostAddItemMaterialVaciumStorage from './Pages/Storage/MateriaVaciumStorage/PostMaterailStorage.jsx';
import MaterialFrontWorkStorageDashboard from './Pages/Storage/MaterialFrontWorkStorage/MaterialFrontWorkStorage.jsx'
import PostAddItemMaterialFrontWorkStorage from './Pages/Storage/MaterialFrontWorkStorage/PostMaterialFrontWorkStorage.jsx';
import PostAddItemMaterialBackWorkStorage from './Pages/Storage/MaterialBackWorkStorage/PostMaterialBackWorkStorage.jsx'
import MaterialbackWorkStorageDashboard from './Pages/Storage/MaterialBackWorkStorage/MaterialBackWorkStorage.jsx'
import MaterialBackWorkDashboard from './Pages/Manager/MaterialBackWork/MaterialBackWork.jsx'
import PostAddItemMaterialBackWork from './Pages/Manager/MaterialBackWork/PostMaterialBackWork.jsx'
import PostCutCodeAddItem from './Pages/CutCode/PostCutCode.jsx';
import GetCutCodeItemList from './Pages/CutCode/GetCutCode.jsx';
import CutCodeDashboard from './Pages/CutCode/CutCodeDashborad.jsx'
import FrontWorkDashboard from './Pages/FrontWork/FrontWorkDashboard.jsx'
import PostFrontWorkAddItem from './Pages/FrontWork/PostFrontWork.jsx'
import PostRejectFrontWorkAddItem from './Pages/FrontWork/Reject/PostRejectFrontWork.jsx'
import FrontWorkRejectDashboard from './Pages/FrontWork/Reject/RejectDashborad.jsx'
import Dashboard from './Pages/FrontWork/Dashborad.jsx'
import Back_workDashboard from './Pages/Backwork/BackworkDashboard.js'
import BackWorkRejectDashboard from './Pages/Backwork/Reject/RejectBackWorkDashborad.jsx'
import PostRejectBackWorkAddItem from './Pages/Backwork/Reject/PostRejectBackWork.jsx'
import PishSabRejectDashboard from './Pages/BackSub/Reject/RejectBackSubDashborad.jsx'
import BackSabDashboard from './Pages/BackSub/BackSubDashborad.jsx'
import Sab_Dashboard from './Pages/Sab/SabDashboard.jsx'
import PostSabReject from './Pages/Sab/Reject/PostRejectSab.jsx'
import SabRejectDashboard from './Pages/Sab/Reject/RejectSabDashborad.jsx'
import CupeSelectionkDashboard from './Pages/Manager/CupeSelections/CupeSelections.jsx'
import PostAddItemCupeSelection from './Pages/Manager/CupeSelections/PostCupeSelections.jsx'
import ManagerMaterialVaciumDashboard from './Pages/Manager/MaterialVacium/MaterialVacium.jsx'
import ManagerRejectDashboard from './Pages/Manager/Reject/Reject.jsx'
import PostAddItemReject from './Pages/Manager/Reject/PostMaterialReject.jsx'
import PostAddItemMaterialVacium from './Pages/Manager/MaterialVacium/PostMaterialVacium.jsx'


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />



        <Route path="/manager-dashboard/" element={<ManagerDashboard />}>
        <Route path="front-material"  index element={<MaterialFronWorkDashboard />} />
        <Route path='front-material/add-front-material' element={<PostAddItemMaterialFrontWork />} /> 
        <Route path="back-material"  index element={<MaterialBackWorkDashboard />} />
        <Route path='back-material/add-back-material' element={<PostAddItemMaterialBackWork />} /> 
        <Route path="cupe_selection"  index element={<CupeSelectionkDashboard />} />
        <Route path='cupe_selection/cupe_selection' element={<PostAddItemCupeSelection />} /> 
        <Route path="vacium_material"  index element={<ManagerMaterialVaciumDashboard />} />
        <Route path='vacium_material/add-vacium-material' element={<PostAddItemMaterialVacium />} /> 
        <Route path="reject_stone"  index element={<ManagerRejectDashboard />} />
        <Route path='reject_stone/add-reject' element={<PostAddItemReject />} /> 
        </Route>






        <Route path="/sab-dashboard/" element={<SabDashboard />}>
          <Route path='sab' index element={<Sab_Dashboard />} /> 
          <Route path='sab/sab_add' element={<PostSabAddItem />} /> 
          <Route path='sab_reject' index element={<SabRejectDashboard />} /> 
          <Route path='sab_reject/sab_reject_add' element={<PostSabReject />} /> 
        </Route>









        <Route path="/pishsab-dashboard/" element={<PishSabDashboard />}>
          <Route path ='pish_sab' index element={<BackSabDashboard />} /> 
          <Route path="pish_sab/pish_sab_add" element={<PostBackSubAddItem />} /> 
          <Route path ='pish_sab_reject' index element={<PishSabRejectDashboard />} /> 
          <Route path="pish_sab_reject/pish_sab_reject_add" element={<PostPishSabReject />} /> 
        </Route>








        <Route path="/frontwork-dashboard/" element={<Dashboard />}>
        <Route path="front_work"  index element={<FrontWorkDashboard />} />
        <Route path='front_work/front_work_add' element={<PostFrontWorkAddItem/>} /> 
        <Route path="front_work_reject"  index element={<FrontWorkRejectDashboard />} />
        <Route path='front_work_reject/front_work_reject_add' element={<PostRejectFrontWorkAddItem />} /> 
        </Route>

        <Route path="/backwork-dashboard/" element={<BackworkDashboard />}>
          <Route path='back_work' index element={<Back_workDashboard />} /> 
          <Route path="back_work/back_work_add" element={<AddItem />} /> 
          <Route path='back_work_reject' index element={<BackWorkRejectDashboard />} /> 
          <Route path="back_work_reject/back_work_reject_add" element={< PostRejectBackWorkAddItem/>} /> 
        </Route>


        <Route path="/storage-dashboard/" element={<StorageDashboard />}>
        <Route path="vaciumstorage"  index element={<MaterialVaciumDashboard />} />
        <Route path='vaciumstorage/add-vaciummaterial' element={<PostAddItemMaterialVaciumStorage />} /> 
        <Route path="front-work-material-storage"  index element={<MaterialFrontWorkStorageDashboard />} />
        <Route path='front-work-material-storage/add-front-work-material-storage' element={<PostAddItemMaterialFrontWorkStorage />} /> 
        <Route path="back-work-material-storage"  index element={<MaterialbackWorkStorageDashboard />} />
        <Route path='back-work-material-storage/add-back-work-material-storage' element={<PostAddItemMaterialBackWorkStorage />} /> 
        </Route>










        <Route path="/cutcode-dashboard/" element={<CutCodeDashboard />}>
          <Route index element={<GetCutCodeItemList />} /> 
          <Route path="cut_code" element={<PostCutCodeAddItem />} /> 
        </Route>

        <Route path="/cupeinter-dashboard/" element={<CoupeStorageDashboard />}>
          <Route index element={<CoupeStorageItemList />} /> 
          <Route path="coupe-storage" element={<CoupeStorageAddItem />} /> 
        </Route>

        <Route path="/cut-dashboard/" element={<CutDashboard />}>
          <Route index element={<GetCutItemList />} /> 
          <Route path="cut" element={<PostCutAddItem />} /> 
        </Route>


        <Route path="/vacium-dashboard/" element={<VaciumDashboard />}>
          <Route index element={<GetVaciumItemList />} /> 
          <Route path="vacium" element={<PostVaciumAddItem />} /> 
        </Route>


        <Route path="/furnace-dashboard/" element={<FurnaceDashboard />}>
          <Route index element={<GetFurnaceItemList />} /> 
          <Route path="furnace" element={<PostFurnaceAddItem />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;