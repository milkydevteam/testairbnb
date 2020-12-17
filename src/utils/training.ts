import {TrainingItem} from 'src/Theme';

export function getTrainingComponent(type?: string) {
  switch (type) {
    case 'level_0': {
      return {
        Tree: TrainingItem.Tree_LV_1,
        Avatar: TrainingItem.HocVienLv0,
        label: 'Tân binh',
        point: '0',
      };
    }
    case 'level_1': {
      return {
        Tree: TrainingItem.Tree_LV_2,
        Avatar: TrainingItem.HocVienMoi,
        label: 'Tân binh chăm chỉ',
        point: '1-6',
      };
    }
    case 'level_2': {
      return {
        Tree: TrainingItem.Tree_LV_3,
        Avatar: TrainingItem.HocVienThongMinh,
        label: 'Tân binh hiếu học',
        point: '7-12',
      };
    }
    case 'level_3': {
      return {
        Tree: TrainingItem.Tree_LV_4,
        Avatar: TrainingItem.HocVienGioi,
        label: 'Chiến binh',
        point: '13-18',
      };
    }
    case 'level_4': {
      return {
        Tree: TrainingItem.Tree_LV_5,
        Avatar: TrainingItem.HocVienXuatSac,
        label: 'Chiến binh chuyên nghiệp',
        point: '19-24',
      };
    }
    case 'level_5': {
      return {
        Tree: TrainingItem.Tree_LV_6,
        Avatar: TrainingItem.HocVienDacBiet,
        label: 'Chiến binh tinh anh',
        point: '25-30',
      };
    }
    case 'level_6': {
      return {
        Tree: TrainingItem.Tree_LV_7,
        Avatar: TrainingItem.DoanhNhanMoi,
        label: 'Siêu chiến binh',
        point: '31-36',
      };
    }
    default:
      return {
        Tree: TrainingItem.Tree_LV_1,
        Avatar: TrainingItem.HocVienLv0,
        label: 'Tân binh học việc',
        point: '0',
      };
  }
}
